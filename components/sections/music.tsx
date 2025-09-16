"use client";

import { FC, useRef, useState } from "react";
import musicData from "@/data/music.json";
import {
  Music as MusicIcon,
  ExternalLink,
  Calendar,
  Disc,
  Clock,
  Play,
  RotateCcw,
  Info,
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

interface AlbumCardProps {
  album: Album;
  index: number;
  isFlipped: boolean;
  onFlip: () => void;
}

const AlbumCard: FC<AlbumCardProps> = ({ album, index, isFlipped, onFlip }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isFlipped) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateX = (mouseY - centerY) / 10; // Vertical tilt
    const rotateY = (centerX - mouseX) / 10; // Horizontal tilt

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || isFlipped) return;
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (!isFlipped) setIsHovered(true);
  };

  const handleClick = () => {
    onFlip();
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  };
  return (
    <div
      ref={cardRef}
      className="group h-96 w-full cursor-pointer"
      style={{
        transformStyle: "preserve-3d",
        transition: isFlipped
          ? "transform 0.6s ease-in-out"
          : "transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {/* Flip Container */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {/* Front Side - Album Artwork Only */}
        <div
          className="aspect-square absolute inset-0 bg-card border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={album.artwork}
              alt={`${album.title} by ${album.artist}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

            {/* Click indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="lexend bg-neutral-100 px-5 py-2 rounded-full">
                Click to flip
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Album Details */}
        <div
          className="absolute inset-0 bg-card border rounded-xl p-6 shadow-lg flex flex-col justify-between"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold bodoni mb-1 text-primary">
              {album.title}
            </h3>
            <p className="text-lg lexend text-muted-foreground">
              {album.artist}
            </p>
          </div>

          {/* Album Stats */}
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

          {/* Genre Tag */}
          <div className="mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs lexend font-medium">
              {album.genre}
            </span>
          </div>

          {/* Description */}
          <div className="flex-1 mb-4">
            <p className="lexend text-sm text-muted-foreground leading-relaxed">
              {album.description}
            </p>
          </div>

          {/* Favorite Track */}
          <div className="mb-4 pt-3 border-t border-border/20">
            <p className="lexend text-xs text-muted-foreground">
              <span className="font-medium">Favorite track:</span>{" "}
              {album.favorite_track}
            </p>
          </div>

          {/* Spotify Link */}
          <div className="flex gap-2">
            <Link
              href={album.spotify_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="lexend text-sm font-medium">
                Listen on Spotify
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Music() {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(
    new Array(musicData.length).fill(false)
  );
  const [showNotice, setShowNotice] = useState(true);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const flipAll = () => {
    const allFlipped = flippedCards.every((card) => card);
    setFlippedCards(new Array(musicData.length).fill(!allFlipped));
  };

  const dismissNotice = () => {
    setShowNotice(false);
  };

  return (
    <section id="music">
      <div className="mx-auto lg:w-2/3 w-full py-10 bodoni px-5">
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni">
            Music
          </h1>
        </div>
        <p className="lexend text-lg mb-6 text-muted-foreground max-w-2xl">
          My favorite albums that fuel creativity and inspire my work. Each one
          tells a story and creates the perfect atmosphere for different types
          of coding.
        </p>

        {/* Notice and Controls */}
        <div className="mb-8 space-y-4">
          {showNotice && (
            <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <Info className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="lexend text-sm text-muted-foreground flex-1">
                Click on any album cover to flip it and see details, or use the
                button below to flip all at once.
              </p>
              <button
                onClick={dismissNotice}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm lexend"
              >
                Got it
              </button>
            </div>
          )}

          <div className="flex justify-center">
            <button
              onClick={flipAll}
              className="flex items-center gap-2 px-4 py-2 bg-card border rounded-lg hover:bg-muted transition-colors duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="lexend text-sm font-medium">
                {flippedCards.every((card) => card)
                  ? "Show All Covers"
                  : "Show All Details"}
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {musicData.map((album: Album, index) => (
            <AlbumCard
              key={index}
              album={album}
              index={index}
              isFlipped={flippedCards[index]}
              onFlip={() => toggleCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
