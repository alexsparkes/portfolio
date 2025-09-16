import { Work } from "@/components/sections/work";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Work - Alex Sparkes",
  description:
    "Explore my portfolio of web development projects, showcasing full-stack applications built with modern technologies.",
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <Work />
    </div>
  );
}
