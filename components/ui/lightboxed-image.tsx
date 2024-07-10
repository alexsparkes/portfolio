import * as React from "react";
import { useState, useRef } from "react";
import { motion, useDomEvent } from "framer-motion";
import { FC } from "react";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

interface ImageProps {
  src: string;
  alt: string;
}

export const LightboxedImage: FC<ImageProps> = ({ src, alt }) => {
  const [isOpen, setOpen] = useState(false);

  useDomEvent(useRef(window), "scroll", () => isOpen && setOpen(false));

  return (
    <div className={`image-container ${isOpen ? "open" : ""}`}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className="shade"
        onClick={() => setOpen(false)}
      />
      <motion.img
        src={src}
        alt="Bimhuis in Amsterdam"
        onClick={() => setOpen(!isOpen)}
        layout
        transition={transition}
        className="h-[200px] object-cover max-w-full rounded-lg"
      />
    </div>
  );
};
