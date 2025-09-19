// components/Work.tsx
import { FC } from "react";
import { Card } from "@/components/ui/card";
import projects from "@/data/projects.json";
import experience from "@/data/experience.json";
import { Calendar, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const Work: FC = () => {
  return (
    <section id="work">
      <div className="mx-auto lg:w-2/3 w-full py-10 bodoni">
        <h1 className="text-[50px] md:text-[75px] xl:text-[80px] mx-5">
          My Work
        </h1>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="lexend font-semibold tracking-tight text-[30px] md:text-[40px] xl:text-[45px] mx-5">
            Projects
          </h2>
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

        {/* Experience Section */}
        <div>
          <h2 className="lexend font-semibold tracking-tight  text-[30px] md:text-[40px] xl:text-[45px] mx-5">
            Experience
          </h2>
          <div className="grid grid-cols-1 gap-6 px-5">
            {experience.map((job, index) => (
              <a
                key={index}
                href={`/work/company/${job.slug}`}
                className="block group transition-all duration-300"
              >
                <div className="hover:bg-card rounded-xl p-6 transition-all duration-300 group-hover:border-primary/20 relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:bg-gray-50 transition-colors border">
                      <Image
                        src="/visr-logo-red.svg"
                        alt={`${job.company} logo`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {job.company}
                          </h3>
                          <p className="text-primary font-medium lexend">
                            {job.role}
                          </p>
                          <div className="flex flex-row gap-4 lexend text-sm text-muted-foreground my-2">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {job.duration}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground lexend space-y-1"></div>
                      </div>

                      <p className="text-muted-foreground lexend leading-relaxed">
                        {job.description}
                      </p>

                      {/* Key Projects */}
                      {/* <div className="mb-4">
                        <h4 className="font-medium lexend mb-2 text-foreground">
                          Key Projects:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.projects.map((project, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full lexend text-sm"
                            >
                              {project.name}
                            </span>
                          ))}
                        </div>*/}
                    </div>

                    {/* Technologies */}
                    {/* <div className="flex flex-wrap gap-2">
                        {job.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded-md lexend text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {job.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md lexend text-xs">
                            +{job.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div> */}

                    {/* <div className="flex-shrink-0">
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div> */}
                  </div>

                  {/* Floating Arrow - same as project cards */}
                  <div className="absolute top-3 right-3 bg-accent rounded-full p-2 transition-transform group-hover:transform group-hover:translate-x-1 group-hover:translate-y-1 duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
