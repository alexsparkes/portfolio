import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Advent_Pro, Libre_Bodoni, Lexend_Deca } from "next/font/google";

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
  openGraph: {
    title: "Alex Sparkes - Portfolio",
    description: "Alex Sparkes' portfolio website",
    type: "website",
    locale: "en_GB",
    url: "https://alexspark.es",
    site_name: "Alex Sparkes - Portfolio",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://cloud.umami.is"
            crossOrigin="anonymous"
          />
        </head>
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
            <Footer />
          </ThemeProvider>
          <SpeedInsights />
          <script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="d3d9c5ac-fa9b-4b75-87fb-d7328affac4c"
          ></script>
        </body>
      </html>
    </>
  );
}
