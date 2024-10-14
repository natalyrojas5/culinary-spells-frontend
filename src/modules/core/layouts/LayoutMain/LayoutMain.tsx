import { Navigation, Footer } from "@/modules/core/components";

export const LayoutMain = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      <main className="content relative">{children}</main>
      <Footer />
    </>
  );
};
