import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://alexspark.es"),
  title: {
    default: "Alex Sparkes - Portfolio",
    template: "%s | Alex Sparkes",
  },
  description: "Alex Sparkes' portfolio website",
  keywords: [
    "Alex Sparkes",
    "Full Stack Developer",
    "TypeScript",
    "Next.js",
    "Web Development Portfolio",
    "UK Developer",
  ],
  authors: [{ name: "Alex Sparkes", url: "https://alexspark.es" }],
  creator: "Alex Sparkes",
  publisher: "Alex Sparkes",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Sparkes - Portfolio",
    description: "Alex Sparkes' portfolio website",
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Alex Sparkes - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@alexmsparkes",
    creator: "@alexmsparkes",
    title: "Alex Sparkes - Portfolio",
    description: "Alex Sparkes' portfolio website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#fefae1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Sparkes",
    url: "https://alexspark.es",
    jobTitle: "Full Stack Developer",
    email: "mailto:alexsparkes@gmail.com",
    sameAs: [
      "https://github.com/alexsparkes",
      "https://www.linkedin.com/in/alex-sparkes/",
      "https://x.com/alexmsparkes",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Hull",
    },
  };

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
          <link
            rel="preconnect"
            href="https://cdn.muetab.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://i.scdn.co"
            crossOrigin="anonymous"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
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
