import axios from "axios";
import { authConfig } from "@/modules/core/utils";
import { getServerSession } from "next-auth/next"; 
const baseURL = process.env.NEXT_PUBLIC_API;

export const API = axios.create({ baseURL });
API.interceptors.request.use(
  async (config) => {
    const session = await getServerSession(authConfig) as any;
    if(session)
      config.headers["Authorization"] = "Bearer " + session.jwtToken;
    
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  }
);
