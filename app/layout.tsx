import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

import { Advent_Pro, Libre_Bodoni, Lexend_Deca } from "next/font/google";
import { motion, useScroll, useSpring } from "framer-motion";

const bodoni = Libre_Bodoni({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bodoni",
});
const adventPro = Advent_Pro({
  subsets: ["latin"],
  variable: "--font-advent-pro",
});

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
});

export const metadata = {
  title: "Alex Sparkes - Portfolio",
  description: "Alex Sparkes' portfolio website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased scroll-smooth	",
            bodoni.variable,
            adventPro.variable,
            lexendDeca.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
