import { Navigation, Footer,Toast } from "@/modules/core/components";

export const LayoutMain = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      <main className="content grow py-14">{children}</main>
      <Footer />
      <Toast />
    </>
  );
};
