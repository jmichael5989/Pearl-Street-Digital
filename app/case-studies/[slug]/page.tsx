import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/ui/Footer";
import CaseStudyDetailTemplate from "@/components/case-studies/CaseStudyDetailTemplate";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "@/lib/case-studies-data";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return {};

  const title = `${caseStudy.client} Case Study | Rank Point Media`;
  const description = caseStudy.summary;
  const url = `https://rankpointmedia.com/case-studies/${caseStudy.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Rank Point Media",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: url },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  return (
    <>
      <main>
        <CaseStudyDetailTemplate caseStudy={caseStudy} />
      </main>
      <Footer />
    </>
  );
}
