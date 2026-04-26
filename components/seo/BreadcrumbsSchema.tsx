/**
 * Renders a BreadcrumbList JSON-LD `<script>` for nested routes (services,
 * industries, case studies, blog posts, etc.). No visible UI — pure SEO
 * structured data. Google uses this to render breadcrumb chips in search
 * results for nested pages, which improves CTR and gives the URL hierarchy
 * proper semantic context.
 *
 * Usage:
 *
 *   <BreadcrumbsSchema
 *     items={[
 *       { name: "Home", url: "https://rankpointmedia.com" },
 *       { name: "Services", url: "https://rankpointmedia.com/services" },
 *       { name: "Website Design", url: "https://rankpointmedia.com/services/website-design" },
 *     ]}
 *   />
 *
 * Place inside the page's JSX (server component) — typically right next
 * to existing JSON-LD scripts (Service, FAQPage, Article, etc.).
 */

export interface BreadcrumbItem {
  name: string;
  /** Absolute URL — Google requires absolute URLs in BreadcrumbList. */
  url: string;
}

export default function BreadcrumbsSchema({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
