"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import useMouse from "@react-hook/mouse-position";
import { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/card";

export default function Home() {
  const mueStack = ["React", "Javascript", "SASS"];
  const ipStack = ["React", "TypeScript", "Tailwind CSS"];

  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <motion.div
          className="flex flex-col items-center leading-none uppercase"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[50px] md:text-[75px] xl:text-[100px] bodoni">
            Alex
          </span>
          <span className="text-[75px] md:text-[112.5px] xl:text-[150px] bodoni">
            Sparkes
          </span>
          <span className="text-[25px] lexend font-semibold text-foreground">
            Student &middot; Developer
          </span>
          <Button className="mt-5 lexend gap-3 group" size="lg" asChild>
            <a href="#work">
              Explore my work{" "}
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </Button>
        </motion.div>
      </div>
      {/*<div className="grid place-items-center h-screen bg-[#dda15e]">
        <h1>Who am I?</h1>
        <p>Write some sexy paragraph about myself.</p>
      </div>*/}
      <section id="work">
        <div className="mx-auto w-2/3 py-10">
          <h1 className="text-[50px] md:text-[75px] xl:text-[100px]">My Work</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 ">
            <Card
              name="Mue Tab"
              description="Mue Tab is a customizable new tab extension that transforms your browsing experience. Enjoy stunning backgrounds, motivational quotes, and useful widgets like to-do lists and weather updates. Personalize your tab with themes and productivity tools to make every new tab inspiring and efficient."
              src="/projects/muetab.png"
              stack={mueStack}
              href="https://muetab.com"
            />
            <Card
              name="Kaiso IP"
              description="A reliable, modern take on the IP locator tool."
              src="/projects/ip.png"
              stack={ipStack}
              href="https://ip.kaiso.one"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="grid place-items-center bg-accent text-accent-foreground py-10">
          <svg
            width="35.25"
            height="54"
            viewBox="0 0 47 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary"
          >
            <path d="M32.584 59.576C30.856 59.576 29.368 59.336 28.12 58.856C26.904 58.376 25.704 57.672 24.52 56.744L22.792 59H21.592V48.92H22.84C23.224 50.456 23.816 51.928 24.616 53.336C25.416 54.712 26.488 55.848 27.832 56.744C29.208 57.64 30.92 58.088 32.968 58.088C34.792 58.088 36.296 57.752 37.48 57.08C38.696 56.376 39.592 55.496 40.168 54.44C40.776 53.352 41.08 52.232 41.08 51.08C41.08 50.056 40.856 49.16 40.408 48.392C39.992 47.624 39.368 46.968 38.536 46.424C37.704 45.848 36.728 45.352 35.608 44.936C34.488 44.52 33.224 44.152 31.816 43.832C29.512 43.288 27.624 42.52 26.152 41.528C24.712 40.536 23.64 39.336 22.936 37.928C22.232 36.488 21.88 34.824 21.88 32.936C21.88 30.6 22.392 28.648 23.416 27.08C24.44 25.48 25.784 24.28 27.448 23.48C29.112 22.648 30.888 22.232 32.776 22.232C34.312 22.232 35.64 22.456 36.76 22.904C37.912 23.32 39.08 23.992 40.264 24.92L41.512 22.808H42.712V32.6L41.512 32.648C40.744 29.608 39.608 27.352 38.104 25.88C36.6 24.408 34.76 23.672 32.584 23.672C31.272 23.672 30.04 23.944 28.888 24.488C27.768 25.032 26.872 25.768 26.2 26.696C25.528 27.592 25.192 28.632 25.192 29.816C25.192 30.808 25.4 31.64 25.816 32.312C26.232 32.952 26.824 33.496 27.592 33.944C28.36 34.392 29.256 34.776 30.28 35.096C31.336 35.416 32.488 35.752 33.736 36.104C36.04 36.712 37.96 37.512 39.496 38.504C41.032 39.464 42.184 40.712 42.952 42.248C43.752 43.752 44.152 45.624 44.152 47.864C44.152 51.48 43.144 54.344 41.128 56.456C39.144 58.536 36.296 59.576 32.584 59.576Z" />
            <path d="M23.944 43.28L15.112 16.88H14.92L14.584 15.488L16.888 7.232H18.328L30.376 43.28H23.944ZM0.232 44V42.8H11.752V44H0.232ZM9.592 32.672V31.472H25.144V32.672H9.592ZM18.184 44V42.8H34.648V44H18.184ZM4.36 43.28L16.888 7.232H18.328L15.4 15.488L5.944 43.28H4.36Z" />
          </svg>
          <span className="lexend">
            © 2024 Alex Sparkes. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
