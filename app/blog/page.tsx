import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { getSortedBlogPosts } from "@/lib/blog-data";

/**
 * Journal index page. Light editorial register (no DarkHero) — the
 * journal is a long-form reading surface, not a marketing landing
 * page. Hero stack matches the homepage WhyUs / ServicesSection
 * pattern: numbered eyebrow + serif H2 weight 400 + graphite lede.
 *
 * Below the hero: numbered editorial TOC of essays mirroring the
 * /services and /case-studies index patterns. Each row is a single
 * essay's metadata + link to the detail page.
 *
 * Per .impeccable.md (Frank Chimero reference), the journal is the
 * editorial register at full length. The "Journal" label inside the
 * page sets the editorial flavor while the URL stays /blog for
 * discoverability.
 */

export const metadata: Metadata = {
  title: "Journal | Rank Point Media",
  description:
    "Long-form essays from the team at Rank Point Media — how we build websites, how we think about marketing for small San Antonio businesses, and what we've learned along the way.",
  openGraph: {
    title: "Journal | Rank Point Media",
    description:
      "Long-form essays from the team at Rank Point Media — how we build websites, how we think about marketing for small San Antonio businesses, and what we've learned along the way.",
    url: "https://rankpointmedia.com/blog",
    siteName: "Rank Point Media",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | Rank Point Media",
    description:
      "Long-form essays from the team at Rank Point Media.",
  },
  alternates: { canonical: "https://rankpointmedia.com/blog" },
};

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getSortedBlogPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Rank Point Media Journal",
    description:
      "Long-form essays from the team at Rank Point Media — how we build websites, how we think about marketing for small San Antonio businesses, and what we've learned along the way.",
    url: "https://rankpointmedia.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Rank Point Media",
      url: "https://rankpointmedia.com",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: { "@type": "Person", name: post.author },
      url: `https://rankpointmedia.com/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main>
        {/* Hero — light editorial, not DarkHero */}
        <section
          aria-labelledby="journal-heading"
          className="bg-light"
          style={{
            paddingTop: "clamp(80px, 14vh, 160px)",
            paddingBottom: "clamp(48px, 8vh, 96px)",
          }}
        >
          <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
            {/* Eyebrow */}
            <header className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <span className="font-heading text-base font-normal italic mr-1">
                  01
                </span>
                &nbsp;/&nbsp; Journal
              </div>
            </header>

            {/* H1 */}
            <h1
              id="journal-heading"
              className="font-heading text-text text-balance"
              style={{
                fontSize: "clamp(2.6rem, 7vw, 5.4rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                margin: 0,
              }}
            >
              Essays from the work.
            </h1>

            {/* Lede */}
            <p
              className="mt-8 font-body"
              style={{
                fontSize: "clamp(1.0625rem, 1.6vw, 1.3125rem)",
                lineHeight: 1.55,
                color: "var(--color-brand-text)",
                maxWidth: "58ch",
              }}
            >
              Long-form pieces about how we build websites, how we think
              about marketing for small San Antonio businesses, and what
              we&rsquo;ve learned along the way. Signed, dated, written
              by us.
            </p>
          </div>
        </section>

        {/* Numbered TOC */}
        <section
          aria-label="Essay index"
          className="bg-light-surface border-t border-border"
          style={{
            paddingTop: "clamp(72px, 12vh, 144px)",
            paddingBottom: "clamp(72px, 12vh, 144px)",
          }}
        >
          <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
            {/* Eyebrow */}
            <header className="mb-6">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <span className="font-heading text-base font-normal italic mr-1">
                  02
                </span>
                &nbsp;/&nbsp; All essays
              </div>
            </header>

            <h2
              className="font-heading text-text text-balance"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                maxWidth: "24ch",
                margin: 0,
              }}
            >
              {posts.length === 1
                ? "One essay, with more on the way."
                : `${posts.length} essays.`}
            </h2>

            {posts.length === 0 ? (
              <p
                className="mt-12 font-body italic"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.6,
                  color: "var(--color-brand-text)",
                  maxWidth: "58ch",
                }}
              >
                The first essay lands soon. Check back, or{" "}
                <Link
                  href="/#talk-to-us"
                  className="not-italic font-medium text-accent underline underline-offset-4 hover:text-text"
                >
                  book an hour
                </Link>{" "}
                in the meantime.
              </p>
            ) : (
              <ol
                className="border-t border-border"
                style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
              >
                {posts.map((post, idx) => (
                  <li
                    key={post.slug}
                    className="grid grid-cols-1 gap-y-3 border-b border-border py-7 lg:grid-cols-[3.5rem_1fr] lg:gap-x-6 lg:py-9"
                  >
                    <span
                      className="font-heading italic text-accent"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.3,
                        paddingTop: "0.35rem",
                      }}
                    >
                      02.{romanNumerals[idx]}
                    </span>
                    <div>
                      {/* Byline tagline */}
                      <p
                        className="font-body text-xs font-semibold uppercase"
                        style={{
                          letterSpacing: "0.12em",
                          color: "var(--color-gray)",
                        }}
                      >
                        {post.author} &middot; {formatDate(post.publishedAt)}
                      </p>

                      <h3
                        className="mt-2 font-heading text-text text-balance"
                        style={{
                          fontSize: "1.5rem",
                          lineHeight: 1.2,
                          letterSpacing: "-0.01em",
                          fontWeight: 400,
                          margin: "0.5rem 0 0 0",
                        }}
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:text-accent"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p
                        className="mt-2 font-body"
                        style={{
                          fontSize: "0.9375rem",
                          lineHeight: 1.58,
                          color: "var(--color-brand-text)",
                          maxWidth: "58ch",
                          margin: "0.5rem 0 0 0",
                        }}
                      >
                        {post.excerpt}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span
                          className="font-body text-xs italic"
                          style={{ color: "var(--color-gray)" }}
                        >
                          {post.readingTime}
                        </span>
                        <span
                          className="hidden h-3 w-px bg-border sm:inline-block"
                          aria-hidden="true"
                        />
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
                          aria-label={`Read ${post.title}`}
                        >
                          Read essay
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
