import { configureStore } from "@reduxjs/toolkit";

import userReducer, { fetchUsers } from "../reducers/userSlice";
import appReducer from "../reducers/appSlice";
import coinReducer, { fetchCoins } from "../reducers/coinSlice";
import { axiosJWT, refreshToken } from "../../services";


export const store = configureStore({
  reducer: {
    coins:coinReducer,
    users: userReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});


axiosJWT.interceptors.request.use(

  async (config) => {
    const currentDate = new Date();
    const exp = localStorage.getItem("exp");
    console.log("exp", Number(exp) *1000)
    console.log("current", currentDate.getTime())
    if (Number(exp) * 1000 > currentDate.getDate()) {
      console.log("first")
      const response = await refreshToken();
      console.log("response: ",response.data);
      config.headers.Authorization = `Bearer ${response.data.refreshToken}`;
      // store.dispatch(setToken(response.data.refreshToken));
      // store.dispatch(setUserInfoRefresh(response.data.userInfo_refresh));
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

store.dispatch(fetchUsers());
store.dispatch(fetchCoins());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
