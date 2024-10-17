"use client"
import { Navigation, Footer, Toast } from "@/modules/core/components";
import { SessionProvider } from "next-auth/react";

export const LayoutMain = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionProvider>
      <Navigation />
      <main className="content grow py-14">{children}</main>
      <Footer />
      <Toast />
    </SessionProvider>
  );
};
