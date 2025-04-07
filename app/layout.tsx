import type {Metadata} from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import {AuthProvider} from "@/context/AuthContext";
import CookieBanner from "@/components/CookieBanner";
const inter = Inter({subsets: ["latin"]});
export const metadata: Metadata = {
  title: "X Clone",
  description:"X Clone Project",
};

export default function RootLayout({
    children,
                                   }:Readonly<{
  children:React.ReactNode;
}>) {
  return(
      <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
            {children}
            <CookieBanner />
        </AuthProvider>
      </body>
      </html>
  );
}
