import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const About = () => {
  return (
    <section className="grid place-items-center bg-card px-5">
      <div className="mx-auto lg:w-2/3 w-full py-10">
        <h1 className="text-[50px] md:text-[75px] xl:text-[80px] bodoni">
          Who am I?
        </h1>
        <p className="lexend">
          Hello! I&apos;m Alex, a student and developer based in the UK. I&apos;m passionate about building things using code and learning new technologies. I&apos;m currently studying Computer Science at the University of Hull and working on a variety of projects in my free time. I&apos;m always looking for new opportunities to learn and grow as a developer.
        </p>
        <Button className="mt-5 lexend gap-3 group" size="lg" asChild>
          <Link href="https://github.com/alexsparkes" target="_blank">
            Explore my Github
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
