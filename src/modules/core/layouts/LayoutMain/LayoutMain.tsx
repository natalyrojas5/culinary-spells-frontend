"use client";

import { Navigation, Footer, Toast } from "@/modules/core/components";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LayoutMain = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://culinary-spells-frontend.netlify.app'); 
  }, [router]);
  return (
    <SessionProvider>
      <Navigation />
      <main className="content grow py-14">{children}</main>
      <Footer />
      <Toast />
    </SessionProvider>
  );
};
