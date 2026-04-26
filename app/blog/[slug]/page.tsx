import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/ui/Footer";
import {
  blogPosts,
  getBlogPostBySlug,
  getSortedBlogPosts,
} from "@/lib/blog-data";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

/**
 * Blog post detail template. Long-form editorial article layout.
 *
 * Composition:
 *   - Light editorial hero with category eyebrow + serif H1 weight
 *     400 + byline (author · date · reading time).
 *   - Article body in a 65ch reading column. Element styles applied
 *     via arbitrary Tailwind selectors on the wrapper so each post's
 *     JSX body stays minimal (just plain <p>, <h2>, <h3>, <ul>,
 *     <blockquote>, <figure>).
 *   - "More essays" footer linking back to the index.
 *
 * The index pattern would also support a Related Essays footer once
 * there are 3+ posts.
 */

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const title = `${post.title.replace(/\.$/, "")} | Rank Point Media`;
  const url = `https://rankpointmedia.com/blog/${post.slug}`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      url,
      siteName: "Rank Point Media",
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
    },
    alternates: { canonical: url },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = getSortedBlogPosts().filter((p) => p.slug !== post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Rank Point Media",
      url: "https://rankpointmedia.com",
    },
    url: `https://rankpointmedia.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbsSchema
        items={[
          { name: "Home", url: "https://rankpointmedia.com" },
          { name: "Journal", url: "https://rankpointmedia.com/blog" },
          {
            name: post.title,
            url: `https://rankpointmedia.com/blog/${post.slug}`,
          },
        ]}
      />
      <main>
        <article>
          {/* Article hero — light editorial */}
          <header
            className="bg-light"
            style={{
              paddingTop: "clamp(80px, 14vh, 160px)",
              paddingBottom: "clamp(40px, 6vh, 64px)",
            }}
          >
            <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
              {/* Category eyebrow */}
              <div className="mb-6">
                <Link
                  href="/blog"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:text-text"
                >
                  <span className="font-heading text-base font-normal italic mr-1">
                    &larr;
                  </span>
                  &nbsp;/&nbsp; Journal
                </Link>
              </div>

              {/* Title */}
              <h1
                className="font-heading text-text text-balance"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  maxWidth: "20ch",
                  margin: 0,
                }}
              >
                {post.title}
              </h1>

              {/* Byline */}
              <p
                className="mt-8 font-body text-xs font-semibold uppercase"
                style={{
                  letterSpacing: "0.12em",
                  color: "var(--color-gray)",
                }}
              >
                {post.author} &middot; {formatDate(post.publishedAt)} &middot;{" "}
                {post.readingTime}
              </p>
            </div>
          </header>

          {/* Article body */}
          <section
            className="bg-light"
            style={{
              paddingTop: "clamp(40px, 6vh, 64px)",
              paddingBottom: "clamp(72px, 12vh, 144px)",
            }}
          >
            <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
              <div
                className={[
                  "font-body",
                  // Body paragraphs
                  "[&_p]:font-body [&_p]:text-[1.0625rem] [&_p]:leading-[1.65] [&_p]:text-[var(--color-brand-text)] [&_p]:my-5",
                  // Body H2
                  "[&_h2]:font-heading [&_h2]:text-text [&_h2]:text-[1.625rem] [&_h2]:leading-[1.2] [&_h2]:tracking-[-0.01em] [&_h2]:font-normal [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:max-w-[28ch]",
                  // Body H3
                  "[&_h3]:font-heading [&_h3]:text-text [&_h3]:text-[1.25rem] [&_h3]:leading-[1.25] [&_h3]:font-normal [&_h3]:mt-10 [&_h3]:mb-3",
                  // Lists
                  "[&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-5 [&_ul]:text-[var(--color-brand-text)]",
                  "[&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-5 [&_ol]:text-[var(--color-brand-text)]",
                  "[&_li]:my-2 [&_li]:leading-[1.6]",
                  // Blockquote — pull-quote style
                  "[&_blockquote]:font-heading [&_blockquote]:italic [&_blockquote]:text-text [&_blockquote]:text-[1.5rem] [&_blockquote]:leading-[1.3] [&_blockquote]:tracking-[-0.01em] [&_blockquote]:my-10 [&_blockquote]:max-w-[32ch] [&_blockquote]:border-l [&_blockquote]:border-accent [&_blockquote]:pl-6",
                  // Inline links
                  "[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-text",
                  // Inline emphasis
                  "[&_em]:italic",
                  "[&_strong]:font-medium [&_strong]:text-text",
                  // Figures
                  "[&_figure]:my-10",
                  "[&_figcaption]:mt-3 [&_figcaption]:font-body [&_figcaption]:italic [&_figcaption]:text-[0.8125rem] [&_figcaption]:text-[var(--color-gray)]",
                ].join(" ")}
                style={{ maxWidth: "65ch" }}
              >
                {post.body}
              </div>
            </div>
          </section>

          {/* More essays footer */}
          {otherPosts.length > 0 ? (
            <section
              aria-label="More essays"
              className="bg-light-surface border-t border-border"
              style={{
                paddingTop: "clamp(72px, 12vh, 144px)",
                paddingBottom: "clamp(72px, 12vh, 144px)",
              }}
            >
              <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
                <header className="mb-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    More essays
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
                  Keep reading.
                </h2>

                <ol
                  className="border-t border-border"
                  style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
                >
                  {otherPosts.slice(0, 3).map((p) => (
                    <li
                      key={p.slug}
                      className="border-b border-border py-7 lg:py-9"
                    >
                      <p
                        className="font-body text-xs font-semibold uppercase"
                        style={{
                          letterSpacing: "0.12em",
                          color: "var(--color-gray)",
                        }}
                      >
                        {p.author} &middot; {formatDate(p.publishedAt)}
                      </p>
                      <h3
                        className="mt-2 font-heading text-text"
                        style={{
                          fontSize: "1.375rem",
                          lineHeight: 1.25,
                          letterSpacing: "-0.01em",
                          fontWeight: 400,
                          margin: "0.5rem 0 0 0",
                        }}
                      >
                        <Link
                          href={`/blog/${p.slug}`}
                          className="transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:text-accent"
                        >
                          {p.title}
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
                        {p.excerpt}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ) : (
            <section
              className="bg-light-surface border-t border-border"
              style={{ paddingBlock: "clamp(40px, 6vh, 64px)" }}
            >
              <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.12em] text-accent transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:underline hover:underline-offset-4"
                >
                  <span aria-hidden="true">&larr;</span>
                  All essays
                </Link>
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
