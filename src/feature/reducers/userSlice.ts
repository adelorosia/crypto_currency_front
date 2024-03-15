import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { IUser, IUserInfo, TUser } from "../../interface";

import {
  accountVerification,
  profilePhotoUpload,
  getAllUsers,
  loginUser,
  logoutUser,
  registerUser,
  verifyUserEmail,
} from "../../services";
import { RootState } from "../store";

interface IUserState {
  isLoginFormOpen: boolean;
  isAccountVerified: boolean;
  userInfo: IUserInfo;
  token: string;
  file: File | null;
}

const userAdapter = createEntityAdapter({
  selectId: (user: IUser) => user._id,
});

export const registerApiUser = createAsyncThunk(
  "/users/registerApiUser",
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
  "/users/loginApiUser",
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
  "/users/logoutApiUser",
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
  "/users/verifyApiUserEmail",
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
  "/users/accountApiVerification",
  async (initialToken: TUser) => {
    try {
      const response = await accountVerification(initialToken);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const fetchUsers = createAsyncThunk("/users/fetchUsers", async () => {
  try {
    const response = await getAllUsers();
    return response.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
});

export const profilePhotoUploadApi = createAsyncThunk(
  "/users/profilePhotoUploadApi",

  async (data: File) => {
    try {
      const response = await profilePhotoUpload(data);
      console.log("Profile Photo UserSlice: ", response.data.user);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

const initialState: IUserState & EntityState<IUser, string> =
  userAdapter.getInitialState({
    isLoginFormOpen: true,
    isAccountVerified: false,
    file: null,
    token: "",
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

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setIsLoginFormOpen: (state, action) => {
      state.isLoginFormOpen = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setFile: (state, action) => {
      state.file = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerApiUser.fulfilled, (state, action) => {
        userAdapter.addOne(state, action.payload.user);
        console.log(action.payload.user);
      })

      .addCase(loginApiUser.fulfilled, (state, action) => {
        userAdapter.setOne(state, action.payload.user);
      })

      .addCase(profilePhotoUploadApi.fulfilled, (state, action) => {
        userAdapter.setOne(state, action.payload.user);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        userAdapter.upsertMany(state, action.payload);
      })

      .addCase(accountApiVerification.fulfilled, userAdapter.updateOne)

      .addCase(verifyApiUserEmail.fulfilled, userAdapter.addOne);
  },
});

export const { selectAll: displayUsers, selectById: displayUser } =
  userAdapter.getSelectors((state: RootState) => state.users);

export const { setIsLoginFormOpen, setUserInfo, setToken, setFile } =
  userSlice.actions;

export default userSlice.reducer;
