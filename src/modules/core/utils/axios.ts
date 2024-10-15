import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API;

export const API = axios.create({ baseURL });
API.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  }
);
