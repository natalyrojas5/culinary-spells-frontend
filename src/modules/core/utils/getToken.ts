"use server";
import { getServerSession } from "next-auth";
import { authConfig } from ".";

export const getToken = async () => {
  const session = await getServerSession(authConfig);
  return session?.jwtToken ?? null;
};
