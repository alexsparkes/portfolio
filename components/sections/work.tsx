import { Card } from "@/components/ui/card";
import projects from "@/data/projects.json";

export const Work = () => {
  return (
    <section id="work">
      <div className="mx-auto lg:w-2/3 w-full py-10">
        <h1 className="text-[50px] md:text-[75px] xl:text-[100px] mx-5">
          My Work
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 ">
          {projects.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              description={card.description}
              src={card.src}
              stack={card.stack}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
