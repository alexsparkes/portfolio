// components/ui/Card.tsx
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CardProps {
  name: string;
  description: string;
  src: string;
  stack: string[];
  href: string;
  isInternal?: boolean;
}

export const Card: FC<CardProps> = ({
  name,
  description,
  src,
  stack,
  href,
  isInternal = false,
}) => {
  return (
    <Link
      href={href}
      target={isInternal ? "_self" : "_blank"}
      rel={isInternal ? "" : "noopener noreferrer"}
    >
      <div className="flex flex-col gap-2 relative group hover:bg-card p-5 rounded-lg transition-all duration-300 cursor-pointer h-full">
        <Image
          className="rounded-lg"
          src={src}
          width={500}
          height={500}
          alt={name}
        />
        <h3 className="text-3xl lexend font-semibold mt-3">{name}</h3>
        <div className="flex gap-2 flex-wrap">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary rounded-full text-secondary lexend text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="lexend">{description}</span>
        <div className="absolute top-3 right-3 bg-accent rounded-full p-2 transition-transform group-hover:transform group-hover:translate-x-1 group-hover:translate-y-1 duration-300">
          <ArrowUpRight />
        </div>
      </div>
    </Link>
  );
};
