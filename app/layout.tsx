import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/home/navbar";

export const metadata: Metadata = {
  title: "Tawakal Express",
  description: "Safe, Secure and Reliable",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
