import Music from "@/components/sections/music";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Music - Alex Sparkes",
  description:
    "Discover my favorite songs and the music that inspires my creativity and development work.",
};

export default function MusicPage() {
  return (
    <div className="pt-20">
      <Music />
    </div>
  );
}
