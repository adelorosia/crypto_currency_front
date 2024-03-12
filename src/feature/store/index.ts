import { configureStore } from "@reduxjs/toolkit";

import authReducer, { fetchUsers } from "../reducers/authSlice";
import appReducer from "../reducers/appSlice";
import { axiosJWT, refreshToken } from "../../services";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
