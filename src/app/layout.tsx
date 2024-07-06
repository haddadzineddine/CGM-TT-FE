import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideMenu } from "./components/side-menu";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CGM TT FRONTEND",
  description: "CGM TT FRONTEND",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="flex min-h-screen bg-gray-100">
          <ToastContainer />
          <SideMenu />
          {children}
        </div>


      </body>
    </html>
  );
}
