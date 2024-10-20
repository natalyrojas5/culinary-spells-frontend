import axios from "axios";
import { getToken } from "./getToken";

const baseURL = process.env.NEXT_PUBLIC_API;

export const API = axios.create({ baseURL });
API.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    try {
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error getting session:", error);
    }
    return config;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  }
);
