import Footer from "@/components/footer";
import Nav from "@/components/main-nav";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mary Mbaire Portfolio",
  description: "Just a taste of what I can do for you and your",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="relative">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
