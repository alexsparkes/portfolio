"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

export const About = () => {
  const photoRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;

    const rect = photoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateX = (mouseY - centerY) / 10; // Vertical tilt
    const rotateY = (centerX - mouseX) / 10; // Horizontal tilt

    photoRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!photoRef.current) return;
    photoRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  return (
    <section className="grid place-items-center bg-card px-5">
      <div className="mx-auto lg:w-2/3 w-full py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni mb-6">
              Who am I?
            </h1>
            <div className="space-y-4">
              <p className="lexend text-lg leading-relaxed">
                Hey! I&apos;m Alex, a third year Computer Science student at
                Hull University. I&apos;ve been messing around with code since I
                was little and now its my career.
              </p>
              <p className="lexend text-foreground/80 leading-relaxed">
                When I&apos;m not working on projects, you&apos;ll find me
                listening to music, playing video games, or taking photos.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Button className="lexend gap-3 group" size="lg" asChild>
                  <Link href="https://github.com/alexsparkes" target="_blank">
                    Check out my code
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Your photo */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div
              ref={photoRef}
              className="relative cursor-pointer"
              style={{
                transition: "transform 0.1s ease-out",
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <Image
                src="/alex-sparkes.png"
                alt="Alex Sparkes"
                width={280}
                height={280}
                className="rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
