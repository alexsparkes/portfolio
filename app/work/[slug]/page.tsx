import { notFound } from "next/navigation";
import type { Metadata } from "next";
import projects from "@/data/projects.json";
import { ProjectDetail } from "@/components/sections/project-detail";

const baseUrl = "https://alexspark.es";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be located.",
    };
  }

  const imageUrl = project.src.startsWith("http")
    ? project.src
    : `${baseUrl}${project.src}`;

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
      url: `${baseUrl}/work/${slug}`,
      images: [{ url: imageUrl, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      <ProjectDetail project={project} />
    </div>
  );
}
