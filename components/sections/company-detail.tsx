import { FC } from "react";
import { Calendar, MapPin, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  name: string;
  description: string;
  url: string;
  technologies: string[];
}

interface Company {
  company: string;
  slug: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  logo?: string;
  website?: string;
  projects: Project[];
  responsibilities: string[];
  technologies: string[];
}

interface CompanyDetailProps {
  company: Company;
}

export const CompanyDetail: FC<CompanyDetailProps> = ({ company }) => {
  return (
    <section className="min-h-screen">
      <div className="mx-auto lg:w-2/3 w-full py-10 px-5">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors lexend mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>

        {/* Company Header */}
        <div className="mb-12">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center border">
              <Image
                src="/visr-logo-red.svg"
                alt={`${company.company} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-[50px] md:text-[65px] xl:text-[70px] bodoni leading-none mb-2">
                {company.company}
              </h1>
              <p className="text-xl text-primary font-medium lexend mb-3">
                {company.role}
              </p>

              <div className="flex flex-wrap gap-4 text-muted-foreground lexend">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {company.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {company.location}
                </div>
                {/* {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Website
                  </a>
                )} */}
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground lexend leading-relaxed max-w-3xl">
            {company.description}
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-[30px] md:text-[40px] xl:text-[45px] bodoni mb-8">
            Projects I Worked On
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {company.projects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold bodoni group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title={`Visit ${project.name}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-muted-foreground lexend mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full lexend text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsibilities Section */}
        <div className="mb-12">
          <h2 className="text-[30px] md:text-[40px] xl:text-[45px] bodoni mb-4">
            What I Did
          </h2>
          <div className="px-2">
            <ul className="space-y-4">
              {company.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground lexend leading-relaxed">
                    {responsibility}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h2 className="text-[30px] md:text-[40px] xl:text-[45px] bodoni mb-8">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {company.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg lexend font-medium hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
