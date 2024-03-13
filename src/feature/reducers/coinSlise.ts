import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ICoin } from "../../interface";
import { getAllCoins } from "../../services";

interface ICoinState {
  status: "idle" | "loading" | "seccess" | "failed";
  error: string | null;
}

const coinAdapter = createEntityAdapter<ICoin, string>({
  selectId: (coin) => coin._id,
});

export const fetchCoins = createAsyncThunk("/coins/fetchCoins", async () => {
  try {
    const response = await getAllCoins();
    return response.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
});

const initialState: ICoinState & EntityState<ICoin, string> =
  coinAdapter.getInitialState({
    status: "idle",
    error: null,
  });

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = "seccess";
        coinAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An Error Accourred";
      });
  },
});

export default coinSlice.reducer;
