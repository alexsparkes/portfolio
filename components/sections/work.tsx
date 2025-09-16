// components/Work.tsx
import { FC } from "react";
import { Card } from "@/components/ui/card";
import projects from "@/data/projects.json";

export const Work: FC = () => {
  return (
    <section id="work">
      <div className="mx-auto lg:w-2/3 w-full py-10 bodoni">
        <h1 className="text-[50px] md:text-[75px] xl:text-[80px] mx-5">
          My Work
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              name={project.name}
              description={project.description}
              src={project.src}
              stack={project.stack}
              href={`/work/${project.slug}`}
              isInternal={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
