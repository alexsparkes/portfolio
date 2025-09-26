import type { Metadata } from "next";
import { MusicClient } from "./music-client";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Discover my favorite songs and the music that inspires my creativity and development work.",
  alternates: {
    canonical: "/music",
  },
  keywords: ["Favourite Albums", "Developer Playlist", "Music Inspiration"],
};

export default function MusicPage() {
  return (
    <div className="pt-20">
      <MusicClient />
    </div>
  );
}
