import type { ReactNode } from "react";

/**
 * Blog/journal data. Posts are TypeScript objects with JSX bodies for
 * now — no MDX dependency until we have enough essays to justify the
 * authoring workflow change.
 *
 * Per .impeccable.md (Frank Chimero reference), the journal is the
 * site's editorial register at full length. Posts should read as real
 * essays from Jon, signed and dated, 1,200-1,800 words. The single
 * sample below is a layout placeholder only — replace with real
 * content before launch.
 *
 * Body markup conventions (so the article-body wrapper styles them
 * consistently): use plain <p>, <h2>, <h3>, <ul>, <li>, <blockquote>,
 * <figure>, <figcaption>. Tailwind utility classes inside the body
 * are fine for one-offs but the wrapper handles the editorial
 * defaults (typography, spacing, color).
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date — yyyy-mm-dd
  author: string;
  readingTime: string; // e.g. "4 min read"
  body: ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "about-this-journal",
    title: "About this journal.",
    excerpt:
      "Why we're writing essays instead of blog posts, and what to expect here.",
    publishedAt: "2026-04-25",
    author: "Jon Michael",
    readingTime: "3 min read",
    body: (
      <>
        <p>
          This is a sample essay. It exists to validate the layout of the
          journal before any real writing lands here. When we ship the first
          actual essay, this placeholder gets deleted and the index page
          starts with whichever piece replaces it.
        </p>

        <p>
          Most agencies have a blog. The blog is mostly there because
          someone&rsquo;s SEO consultant said it should be. The posts are
          short, optimized for keywords nobody searches for in earnest, and
          forgotten the day after they ship. We&rsquo;re going to try
          something different.
        </p>

        <h2>What this is</h2>

        <p>
          A journal. Long-form essays about how we build websites, how we
          think about marketing for small San Antonio businesses, and what
          we&rsquo;ve learned along the way. Each essay is signed by the
          person who wrote it. Each one takes the time it takes to read.
          We&rsquo;d rather publish four essays a year that are worth your
          attention than forty posts a year that aren&rsquo;t.
        </p>

        <h2>What it isn&rsquo;t</h2>

        <p>
          Here are the things you won&rsquo;t find:
        </p>

        <ul>
          <li>Listicles. No &ldquo;7 SEO tips for 2026.&rdquo;</li>
          <li>Posts written to rank for a keyword.</li>
          <li>Recycled content from someone else&rsquo;s newsletter.</li>
          <li>AI-generated filler. Every word is written by Jon or Stacie.</li>
          <li>
            Calls to book a free consultation at the end of every paragraph.
          </li>
        </ul>

        <p>
          The point isn&rsquo;t to convert you. The point is to share the
          work in a way that respects your time.
        </p>

        <blockquote>
          The best blogs read like letters from a person you&rsquo;d want to
          have coffee with. Not press releases from a company.
        </blockquote>

        <h2>What to expect</h2>

        <p>
          Essays will land when they&rsquo;re ready. Sometimes once a month,
          sometimes less often, occasionally a flurry. The first few will
          probably be about the work itself &mdash; what custom-coded
          actually means, why we don&rsquo;t do long-term contracts, how
          much a Lighthouse score actually matters for your phone calls. As
          we go, the topics will widen.
        </p>

        <p>
          If you have something you want us to write about, the email is at
          the bottom of every page.
        </p>

        <p>
          &mdash; Jon
        </p>
      </>
    ),
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
