"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import useMouse from "@react-hook/mouse-position";
import { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { ArrowUpRight } from 'lucide-react';
import { Card } from "@/components/card";

export default function Home() {
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <div className="flex flex-col items-center leading-none uppercase">
          <span className="text-[100px] bodoni">Alex</span>
          <span className="text-[150px] bodoni">Sparkes</span>
          <span className="text-[25px] lexend font-semibold text-foreground">
            Student &middot; Developer
          </span>
          <Button className="mt-5 lexend gap-3 group" size="lg">
            Explore my work{" "}
            <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
          </Button>
        </div>
      </div>
      <div className="grid place-items-center h-screen bg-[#dda15e]">
        <h1>Who am I?</h1>
        <p>Write some sexy paragraph about myself.</p>
      </div>
      <section>
        <div className="mx-auto w-2/3 py-10">
          <h1 className="text-[80px]">My Work</h1>
          <div className="grid grid-cols-3 gap-10 ">
            <Card name="Mue Tab" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt pretium ligula. Nulla nec massa cursus, viverra mi in, aliquam ex. Duis in mollis dui. Nulla vel rutrum purus." imageURL="https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card name="Mue Tab" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt pretium ligula. Nulla nec massa cursus, viverra mi in, aliquam ex. Duis in mollis dui. Nulla vel rutrum purus." imageURL="https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Card name="Mue Tab" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt pretium ligula. Nulla nec massa cursus, viverra mi in, aliquam ex. Duis in mollis dui. Nulla vel rutrum purus." imageURL="https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </section>

      <div></div>
    </>
  );
}
