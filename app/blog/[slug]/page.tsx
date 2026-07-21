import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getBlogPostBySlug,
  getSortedBlogPosts,
} from "@/lib/blog-data";
import BreadcrumbsSchema from "@/components/seo/BreadcrumbsSchema";

/**
 * Blog post detail — three-color editorial article. Light reading
 * surface: a post hero (back-link eyebrow + serif H1 + byline), the
 * article body in a ~68ch reading column styled by the scoped
 * `.essay-body` block in app/globals.css, and a "more essays" footer.
 * Footer + pre-footer CTA come from app/blog/layout.tsx.
 *
 * Post bodies stay minimal JSX (plain <p>, <h2>, <h3>, <ul>,
 * <blockquote>, <figure>); `.essay-body` supplies the editorial defaults.
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
    // Journal hidden 2026-06-08 pending content refresh. While hidden, deindex
    // every post so Google drops them from search results; remove this
    // `robots` block when the Journal section returns.
    robots: { index: false, follow: true },
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
    // Article schema requires `image` for Google Rich Results eligibility.
    // Falls back to the root dynamic OG image (1200x630) until per-post hero
    // photography exists. When BlogPost gains an `image` field, prefer
    // post.image and fall back to this URL.
    image: "https://rankpointmedia.com/opengraph-image",
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
      <main className="rpm3">
        <article>
          {/* Post hero — light editorial */}
          <header className="post-hero">
            <div className="wrap">
              <Link href="/blog" className="post-back appear">
                <span aria-hidden="true">&larr;</span> Journal
              </Link>
              <h1 className="appear">{post.title}</h1>
              <p className="post-byline appear">
                {post.author} &middot; {formatDate(post.publishedAt)} &middot;{" "}
                {post.readingTime}
              </p>
            </div>
          </header>

          {/* Article body */}
          <section aria-label="Article">
            <div className="wrap">
              <div className="essay-body">{post.body}</div>
            </div>
          </section>

          {/* More essays */}
          {otherPosts.length > 0 ? (
            <section aria-label="More essays">
              <div className="wrap">
                <p className="kicker appear">More essays</p>
                <h2 className="more-head appear">Keep reading.</h2>
                <ol className="more-list appear">
                  {otherPosts.slice(0, 3).map((p) => (
                    <li key={p.slug} className="more-row">
                      <p className="essay-meta">
                        {p.author} &middot; {formatDate(p.publishedAt)}
                      </p>
                      <h3>
                        <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                      </h3>
                      <p className="more-excerpt">{p.excerpt}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          ) : (
            <section aria-label="Back to journal">
              <div className="wrap">
                <Link href="/blog" className="post-back appear">
                  <span aria-hidden="true">&larr;</span> All essays
                </Link>
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
