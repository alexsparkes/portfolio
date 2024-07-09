"use client";

import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { Card } from "@/components/card";
import { motion, useScroll, useSpring } from "framer-motion";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Hero />
      {/*<div className="grid place-items-center h-screen bg-[#dda15e]">
        <h1>Who am I?</h1>
        <p>Write some sexy paragraph about myself.</p>
      </div>*/}
      <Work />
    </>
  );
}
