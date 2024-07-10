import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Work } from "@/components/sections/work";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Alex Sparkes - Portfolio",
  description:
    "Alex Sparkes is a full stack developer based in the UK. He has a passion for creating beautiful, functional websites and applications.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Gallery />
    </>
  );
}
