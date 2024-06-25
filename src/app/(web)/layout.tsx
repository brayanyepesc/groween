import type { Metadata } from "next";
import { Navbar } from "@/components/templates";

export const metadata: Metadata = {
  title: "Groween",
  description: "Grow your own planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
