import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Skills } from "@/components/sections/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Alex Sparkes is a full stack developer based in the UK. He has a passion for creating beautiful, functional websites and applications.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Portfolio",
    "Software Engineer",
    "Next.js Developer",
    "TypeScript",
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
    </>
  );
}
