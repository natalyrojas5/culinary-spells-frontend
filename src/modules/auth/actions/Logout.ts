import { signOut } from "next-auth/react";

export const logoutService = async () => {
  await signOut();
};
