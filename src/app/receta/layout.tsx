import { redirect } from "next/navigation";
import { PATH } from "@/modules/auth/constants";
import { getServerSession } from "next-auth/next";
import { authConfig } from "@/modules/core/utils";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authConfig);

  if (!session?.user) {
    redirect(`/${PATH.login}`);
  }

  return <>{children}</>;
};
export default Layout;
