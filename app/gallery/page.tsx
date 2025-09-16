import { Gallery } from "@/components/sections/gallery";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Gallery - Alex Sparkes",
  description:
    "Explore my photography gallery featuring moments captured from around the world.",
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <Gallery />
    </div>
  );
}
