
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
    
export const metadata: Metadata = {
  title: "UVL_WEB",
  description: "UniVersaLink Solutions",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./Screenshot 2024-02-04 172524.png" />
      
      <body className={inter.className}>
      <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
