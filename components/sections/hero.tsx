"use client"

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
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
    )
}