'use server'
import axios from "axios";
import { authConfig } from ".";
import { getServerSession } from "next-auth";

const baseURL = process.env.NEXT_PUBLIC_API;

export const API = axios.create({ baseURL });
API.interceptors.request.use(
  async (config) => {
    if(config.headers["Content-Type"] !==  "multipart/form-data")
      config.headers["Content-Type"] = "application/json";
    else
      config.headers["Content-Type"] = "multipart/form-data";
    console.log(config.headers["Content-Type"])
    const session = await getServerSession(authConfig);
    if(session?.jwtToken) {
      config.headers.Authorization = `Bearer ${session.jwtToken}`;
    }
    return config;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  }
);
