import { FC } from "react";
import musicData from "@/data/music.json";
import {
  Music as MusicIcon,
  ExternalLink,
  Calendar,
  Disc,
  Clock,
  Play,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Album {
  title: string;
  artist: string;
  year: string;
  genre: string;
  tracks: number;
  duration: string;
  artwork: string;
  spotify_url: string;
  description: string;
  favorite_track: string;
}

export default function Music() {
  return (
    <section id="music">
      <div className="mx-auto lg:w-2/3 w-full py-10 bodoni px-5">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni">
            Music
          </h1>
        </div>
        <p className="lexend text-lg mb-10 text-muted-foreground max-w-2xl">
          My favorite albums that fuel creativity and inspire my work. Each one
          tells a story and creates the perfect atmosphere for different types
          of coding.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {musicData.map((album: Album, index) => (
            <div
              key={index}
              className="group bg-card border rounded-xl p-0 hover:shadow-xl transition-all duration-300 hover:border-primary/20 hover:scale-[1.02] overflow-hidden"
            >
              {/* Album Artwork */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={album.artwork}
                  alt={`${album.title} by ${album.artist}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <Link
                  href={album.spotify_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </Link>
              </div>

              {/* Album Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold bodoni mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {album.title}
                  </h3>
                  <p className="text-lg lexend text-muted-foreground">
                    {album.artist}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-4 text-sm lexend text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {album.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Disc className="w-4 h-4" />
                    {album.tracks} tracks
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {album.duration}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs lexend font-medium">
                    {album.genre}
                  </span>
                </div>

                <p className="lexend text-sm text-muted-foreground leading-relaxed mb-3">
                  {album.description}
                </p>

                <div className="pt-3 border-t border-border/20">
                  <p className="lexend text-xs text-muted-foreground">
                    <span className="font-medium">Favorite track:</span>{" "}
                    {album.favorite_track}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
