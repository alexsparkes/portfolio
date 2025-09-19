import { notFound } from "next/navigation";
import experience from "@/data/experience.json";
import { CompanyDetail } from "@/components/sections/company-detail";

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

export async function generateMetadata({ params }: CompanyPageProps) {
  const resolvedParams = await params;
  const company = experience.find(
    (company) => company.slug === resolvedParams.slug
  );

  if (!company) {
    return {
      title: "Company Not Found",
    };
  }

  return {
    title: `${company.company} - Alex Sparkes`,
    description: `My experience working at ${company.company} as a ${company.role}. ${company.description}`,
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
