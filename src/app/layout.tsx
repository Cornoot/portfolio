import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import localFont from "next/font/local";
import TopNav from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

const monument = localFont({
  src: "../../public/fonts/monumentextended-regular.woff",
  variable: "--monument",
});
const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const metadata: Metadata = {
  title: {
    template: "%s - Portfolio Corné",
    default: "Portfolio Corné",
  },
  description:
    "Product designer, I love to solve problems with (bad) humour. I strive to solve complex problems to enable others to work efficiently. Get to know me and hear everything about my work and cats.",
  icons: {
    icon: "/favicon.ico?v=4",
    apple: "/apple-touch-icon.png?v=4",
    shortcut: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body
      className={`${inter.variable} ${monument.variable} mx-auto max-w-screen-desktop bg-gray-900 px-4 tablet-sm:px-18`}
    >
      <TopNav />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
