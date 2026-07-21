import type { Metadata } from "next";
import Link from "next/link";
import { getSortedBlogPosts } from "@/lib/blog-data";

/**
 * Journal index — three-color editorial register. A light reading
 * surface (not an inverted marketing hero): numbered eyebrow, serif H1,
 * lede, then a numbered list of essays. Footer + pre-footer CTA come
 * from app/blog/layout.tsx.
 *
 * Per .impeccable.md (Frank Chimero reference), the journal is the
 * editorial register at full length. The "Journal" label sets the
 * editorial flavor while the URL stays /blog for discoverability.
 */

export const metadata: Metadata = {
  title: "Journal | Rank Point Media",
  description:
    "Long-form essays from Jon and Stacie at Rank Point Media on how we build websites and run digital marketing.",
  openGraph: {
    title: "Journal | Rank Point Media",
    description:
      "Long-form essays from Jon and Stacie at Rank Point Media on how we build websites and run digital marketing.",
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
  // Journal hidden 2026-06-08 pending content refresh. While hidden, deindex
  // both the index and detail pages so Google drops them from search results;
  // remove this `robots` block when the Journal section returns.
  robots: { index: false, follow: true },
};

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
      "Long-form essays from Jon and Stacie at Rank Point Media on how we build websites and run digital marketing.",
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
      <main className="rpm3">
        {/* Hero — light editorial */}
        <section className="blog-hero" aria-labelledby="journal-heading">
          <div className="wrap">
            <p className="kicker appear">01&nbsp;&nbsp;/&nbsp;&nbsp;Journal</p>
            <h1 id="journal-heading" className="appear">
              Essays from the work
            </h1>
            <p className="lede appear">
              Long-form pieces about how we build websites, how we think about
              digital marketing, and what we&rsquo;ve learned along the way.
              Signed, dated, written by us.
            </p>
          </div>
        </section>

        {/* Numbered index */}
        <section aria-label="Essay index">
          <div className="wrap">
            <p className="kicker appear">02&nbsp;&nbsp;/&nbsp;&nbsp;All essays</p>
            <h2 className="more-head appear">
              {posts.length === 1
                ? "One essay, with more on the way."
                : `${posts.length} essays.`}
            </h2>

            {posts.length === 0 ? (
              <p className="essay-excerpt appear" style={{ marginTop: "clamp(32px, 5vw, 52px)" }}>
                The first essay lands soon. Check back, or{" "}
                <Link
                  href="/contact#talk-to-us"
                  className="essay-readmore"
                  style={{ textTransform: "none", letterSpacing: "0" }}
                >
                  book an hour
                </Link>{" "}
                in the meantime.
              </p>
            ) : (
              <ol className="essay-list appear">
                {posts.map((post, idx) => (
                  <li key={post.slug} className="essay-row">
                    <span className="essay-num">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="essay-meta">
                        {post.author} &middot; {formatDate(post.publishedAt)}
                      </p>
                      <h3>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="essay-excerpt">{post.excerpt}</p>
                      <div className="essay-foot">
                        <span className="essay-time">{post.readingTime}</span>
                        <span className="essay-rule" aria-hidden="true" />
                        <Link
                          href={`/blog/${post.slug}`}
                          className="essay-readmore"
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
    </>
  );
}
