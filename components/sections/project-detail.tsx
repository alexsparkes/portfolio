import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  CheckCircle,
  Code,
  Award,
} from "lucide-react";

interface Project {
  slug: string;
  name: string;
  description: string;
  src: string;
  stack: string[];
  href: string;
  github?: string;
  featured: boolean;
  year: string;
  status: string;
  detailed_description: string;
  key_features: string[];
  technical_highlights: string[];
}

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail: FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mx-auto lg:w-2/3 w-full px-5 py-10">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 lexend"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Project Image */}
          <div className="relative">
            <Image
              src={project.src}
              alt={project.name}
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full"
            />
            {project.featured && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm lexend font-medium">
                Featured
              </div>
            )}
          </div>

          {/* Project Info */}
          <div>
            <h1 className="text-[40px] md:text-[60px] bodoni mb-4">
              {project.name}
            </h1>

            <p className="text-xl lexend text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="lexend text-sm">{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4" />
                <span className="lexend text-sm">{project.status}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="lexend font-semibold mb-3 text-sm uppercase tracking-wide">
                Tech Stack
              </h3>
              <div className="flex gap-2 flex-wrap">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full lexend text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors lexend"
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </Link>
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors lexend"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Content */}
      <div className="mx-auto lg:w-2/3 w-full px-5 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-3xl bodoni mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                About This Project
              </h2>
              <p className="lexend text-muted-foreground leading-relaxed text-lg">
                {project.detailed_description}
              </p>
            </section>

            {/* Key Features */}
            {/* <section>
              <h2 className="text-3xl bodoni mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.key_features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-card rounded-lg border"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="lexend text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Technical Highlights */}
            {/* <section>
              <h2 className="text-3xl bodoni mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-primary" />
                Technical Highlights
              </h2>
              <div className="space-y-3">
                {project.technical_highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="lexend text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </section> */}
          </div>

          <div className="space-y-8">
            {/* This sidebar can be used for additional project metadata in the future */}
          </div>
        </div>

        {/* Back to Work CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 px-6 py-3 rounded-lg transition-colors lexend"
          >
            <ArrowLeft className="w-4 h-4" />
            View More Projects
          </Link>
        </div>
      </div>
    </div>
  );
};
