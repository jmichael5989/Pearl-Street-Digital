import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Digital Marketing Blog San Antonio | Pearl Street Digital",
  description:
    "Practical digital marketing tips for San Antonio small businesses. Website design, local SEO, Google Ads, and social media strategies that actually work.",
  openGraph: {
    title: "Digital Marketing Blog San Antonio | Pearl Street Digital",
    description:
      "Practical digital marketing tips for San Antonio small businesses. Website design, local SEO, Google Ads, and social media strategies that actually work.",
    url: "https://pearlstreetdigital.com/blog",
    siteName: "Pearl Street Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog San Antonio | Pearl Street Digital",
    description:
      "Practical digital marketing tips for San Antonio small businesses.",
  },
  alternates: { canonical: "https://pearlstreetdigital.com/blog" },
};

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
                Blog
              </span>
              <h1 className="mt-3 font-heading text-4xl sm:text-5xl font-bold text-dark">
                Digital Marketing Tips for San Antonio Businesses
              </h1>
              <p className="mt-5 text-lg text-gray leading-relaxed">
                Practical advice on website design, local SEO, Google Ads, and
                social media -- written for San Antonio small business owners
                who want results without the jargon.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-light py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]"
                >
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                    {post.category}
                  </span>
                  <h2 className="font-heading text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarIcon className="h-3.5 w-3.5" />
                      {new Date(post.publishDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary">
                    Read article
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
