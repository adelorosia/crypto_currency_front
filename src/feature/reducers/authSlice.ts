import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IUser, IUserInfo, TUser } from "../../interface";

import {
  accountVerification,
  getAllUsers,
  loginUser,
  logoutUser,
  registerUser,
  verifyUserEmail,
} from "../../services";
import { RootState } from "../store";

interface IAuthState {
  isLoginFormOpen: boolean;
  isAccountVerified: boolean;
  userInfo: IUserInfo;
}

const authAdapter = createEntityAdapter<IUser, string>({
  selectId: (user) => user._id,
});

export const registerApiUser = createAsyncThunk(
  "/auth/registerApiUser",
  async (initialUser: TUser) => {
    try {
      const response = await registerUser(initialUser);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const loginApiUser = createAsyncThunk(
  "/auth/loginApiUser",
  async (initialUser: TUser) => {
    try {
      const response = await loginUser(initialUser);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const logoutApiUser = createAsyncThunk(
  "/auth/logoutApiUser",
  async () => {
    try {
      const response = await logoutUser();
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const verifyApiUserEmail = createAsyncThunk(
  "/auth/verifyApiUserEmail",
  async () => {
    try {
      const response = await verifyUserEmail();
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const accountApiVerification = createAsyncThunk(
  "/auth/accountApiVerification",
  async (initialToken: TUser) => {
    try {
      const response = await accountVerification(initialToken);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const fetchUsers = createAsyncThunk("/auth/fetchUsers", async () => {
  try {
    const response = await getAllUsers();
    return response.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
});

const initialState: IAuthState & EntityState<IUser, string> =
  authAdapter.getInitialState({
    isLoginFormOpen: true,
    isAccountVerified: false,
    userInfo: {
      userId: "",
      firstName: "",
      lastName: "",
      email: "",
      photo: "",
      isAdmin: false,
      bio: "",
      iat: 0,
      exp: 0,
    },
  });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoginFormOpen: (state, action) => {
      state.isLoginFormOpen = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerApiUser.fulfilled, (state, action) => {
        authAdapter.addOne(state, action.payload.user);
        console.log(action.payload.user);
      })

      .addCase(loginApiUser.fulfilled, (state, action) => {
        authAdapter.setOne(state, action.payload.user);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        authAdapter.upsertMany(state, action.payload);
      })

      .addCase(accountApiVerification.fulfilled, authAdapter.updateOne)

      .addCase(verifyApiUserEmail.fulfilled, authAdapter.addOne);
  },
});

export const { selectAll: displayUsers, selectById: displayUser } =
  authAdapter.getSelectors((state: RootState) => state.auth);

export const { setIsLoginFormOpen, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
