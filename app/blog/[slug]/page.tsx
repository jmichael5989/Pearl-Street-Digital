import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CTABanner from "@/components/sections/CTABanner";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getBlogPost(slug);
    return {
      title: post.metaTitle,
      description: post.metaDescription,
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `https://pearlstreetdigital.com/blog/${post.slug}`,
        siteName: "Pearl Street Digital",
        locale: "en_US",
        type: "article",
        publishedTime: post.publishDate,
        authors: [post.author],
      },
      twitter: {
        card: "summary_large_image",
        title: post.metaTitle,
        description: post.metaDescription,
      },
      alternates: {
        canonical: `https://pearlstreetdigital.com/blog/${post.slug}`,
      },
    };
  } catch {
    return { title: "Post Not Found | Pearl Street Digital" };
  }
}

function ArrowLeftIcon({ className }: { className?: string }) {
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
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let post;
  try {
    post = getBlogPost(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.publishDate,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Pearl Street Digital",
              url: "https://pearlstreetdigital.com",
            },
            url: `https://pearlstreetdigital.com/blog/${post.slug}`,
          }),
        }}
      />
      <Header />
      <main>
        <article className="bg-white py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray hover:text-primary transition-colors mb-8"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to blog
            </Link>

            {/* Header */}
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
              {post.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-5 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray mb-12 pb-8 border-b border-border">
              <span>By {post.author}</span>
              <span>
                {new Date(post.publishDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>{post.readTime}</span>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {post.content.map((section, index) => {
                if (section.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="font-heading text-2xl font-semibold text-dark mt-10 mb-3"
                    >
                      {section.text}
                    </h2>
                  );
                }
                if (section.type === "list") {
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-6 text-gray space-y-2 leading-relaxed"
                    >
                      {section.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-gray leading-relaxed">
                    {section.text}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-gray mb-4">
                Ready to put these strategies to work for your San Antonio
                business?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-accent to-[#7C3AED] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(139,92,246,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(139,92,246,0.45)]"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </article>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
