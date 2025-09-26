import { Work } from "@/components/sections/work";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore my portfolio of web development projects, showcasing full-stack applications built with modern technologies.",
  alternates: {
    canonical: "/work",
  },
  keywords: [
    "Alex Sparkes Projects",
    "Web Development Portfolio",
    "Next.js Case Studies",
  ],
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <Work />
    </div>
  );
}
