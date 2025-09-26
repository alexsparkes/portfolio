import { Gallery } from "@/components/sections/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore my photography gallery featuring moments captured from around the world.",
  alternates: {
    canonical: "/gallery",
  },
  keywords: ["Photography", "Travel Photos", "Alex Sparkes Gallery"],
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <Gallery />
    </div>
  );
}
