import axios from "axios";
import { TUser } from "../interface";

const SERVER_URL = "https://crypto-currency-db.orosia.online/api/v1";

export const axiosJWT = axios.create();
axiosJWT.interceptors.request.use;

//COINS

//GET ALL COINS
export const getAllCoins = () => {
  const url = `${SERVER_URL}/coins`;
  return axios.get(url);
};

//USER & AUTH

//REGISTER
export const registerUser = (user: TUser) => {
  const url = `${SERVER_URL}/register`;
  return axios.post(url, user);
};

//LOGIN
export const loginUser = (user: TUser) => {
  const url = `${SERVER_URL}/login`;
  return axios.post(url, user);
};

//LOGOUT
export const logoutUser = () => {
  const url = `${SERVER_URL}/logout`;
  return axios.delete(url);
};

//SEND EMAIL TO USER
export const verifyUserEmail = () => {
  const url = `${SERVER_URL}/generate-verify-email-token`;
  return axiosJWT.post(url);
};

//VERIFY ACCOUNT
export const accountVerification = (token: TUser) => {
  const url = `${SERVER_URL}/verify-account`;
  return axios.put(url, token);
};

//NEW TOKEN
export const refreshToken = () => {
  const url = `${SERVER_URL}/token`;
  return axios.get(url);
};

//GET LIST OF ALL USERS
export const getAllUsers = () => {
  const url = `${SERVER_URL}/users`;
  return axios.get(url);
};


