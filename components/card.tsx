import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Card = ({
  name,
  description,
  src,
  stack,
  href,
}: {
  name: string;
  description: string;
  src: string;
  stack: string[];
  href: string;
}) => {
  return (
    <Link href={href} target="_blank">
      <div className="flex flex-col gap-2 relative group hover:bg-card p-5 rounded-lg transition-all duration-300 cursor-pointer h-full">
        <Image
          className="rounded-lg"
          src={src}
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <h3 className="text-3xl lexend font-semibold mt-3">{name}</h3>
        <div className="flex gap-2 flex-wrap">
          {stack.map((name, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary rounded-full text-secondary lexend text-sm"
            >
              {name}
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
