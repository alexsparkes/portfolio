import { notFound } from "next/navigation";
import type { Metadata } from "next";
import experience from "@/data/experience.json";
import { CompanyDetail } from "@/components/sections/company-detail";

const baseUrl = "https://alexspark.es";

interface CompanyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return experience.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const company = experience.find(
    (company) => company.slug === resolvedParams.slug
  );

  if (!company) {
    return {
      title: "Company Not Found",
      description: "The requested company experience could not be located.",
    };
  }

  const logoUrl = company.logo
    ? company.logo.startsWith("http")
      ? company.logo
      : `${baseUrl}${company.logo}`
    : undefined;

  return {
    title: company.company,
    description: `My experience working at ${company.company} as a ${company.role}. ${company.description}`,
    alternates: {
      canonical: `/work/company/${company.slug}`,
    },
    openGraph: {
      title: company.company,
      description: company.description,
      type: "profile",
      url: `${baseUrl}/work/company/${company.slug}`,
      images: logoUrl ? [{ url: logoUrl, alt: company.company }] : undefined,
    },
    twitter: {
      card: "summary",
      title: company.company,
      description: company.description,
      images: logoUrl ? [logoUrl] : undefined,
    },
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const resolvedParams = await params;
  const company = experience.find(
    (company) => company.slug === resolvedParams.slug
  );

  if (!company) {
    notFound();
  }

  return (
    <div className="pt-20">
      <CompanyDetail company={company} />
    </div>
  );
}
