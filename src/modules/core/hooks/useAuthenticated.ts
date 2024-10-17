import { useSession } from "next-auth/react";

export const useAuthenticated = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const user = session?.user;

  return { user, isAuthenticated };
};
