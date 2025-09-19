import { notFound } from "next/navigation";
import experience from "@/data/experience.json";
import { CompanyDetail } from "@/components/sections/company-detail";

interface CompanyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return experience.map((company) => ({
    slug: company.slug,
  }));
}

export async function generateMetadata({ params }: CompanyPageProps) {
  const company = experience.find((company) => company.slug === params.slug);

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

export default function CompanyPage({ params }: CompanyPageProps) {
  const company = experience.find((company) => company.slug === params.slug);

  if (!company) {
    notFound();
  }

  return (
    <div className="pt-20">
      <CompanyDetail company={company} />
    </div>
  );
}
