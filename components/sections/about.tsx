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
        <p>
          I&apos;m not good at wording this, I&apos;ll let my work speak for
          itself.
        </p>
        <Button className="mt-5 lexend gap-3 group" size="lg" asChild>
          <Link href="https://github.com/alexsparkes">
            Explore my work{" "}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </Button>
      </div>
    </section>
  );
};
