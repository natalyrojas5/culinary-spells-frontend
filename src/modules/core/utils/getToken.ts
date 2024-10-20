import { getSession } from "next-auth/react";

export const getToken = async () => {
  const session = await getSession();
  return session?.jwtToken || null;
};
