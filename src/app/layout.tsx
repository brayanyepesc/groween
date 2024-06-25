import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
