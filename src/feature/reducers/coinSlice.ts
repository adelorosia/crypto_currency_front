import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ICoin } from "../../interface";
import { getAllCoins } from "../../services";
import { RootState } from "../store";

interface ICoinState {
  status: "idle" | "loading" | "success" | "failed"; 
  error: string | null;
  coinId:string;
}

const coinAdapter = createEntityAdapter<ICoin, string>({
  selectId: (coin) => coin.id, 
});

export const fetchCoins = createAsyncThunk(
  "/coins/fetchCoins",
  async () => {
    try {
      const response = await getAllCoins();
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

const initialState: ICoinState & EntityState<ICoin, string> =
  coinAdapter.getInitialState({
    status: "idle",
    error: "",
    coinId:""
  });

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoinId:(state,action)=>{
      state.coinId=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = "success";
        coinAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An Error Occurred"; 
      });
  },
});


export const {setCoinId} = coinSlice.actions

export const { selectAll: displayCoins, selectById: displayCoin } =
  coinAdapter.getSelectors((state: RootState) => state.coins);


export default coinSlice.reducer;
