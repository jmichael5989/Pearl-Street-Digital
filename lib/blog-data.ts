export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishDate: string;
  author: string;
  category: string;
  readTime: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-every-san-antonio-business-needs-a-website-in-2026",
    title: "Why Every San Antonio Business Needs a Website in 2026",
    metaTitle:
      "Why Every San Antonio Business Needs a Website in 2026 | Pearl Street Digital",
    metaDescription:
      "Still relying on social media or word of mouth? Here is why San Antonio small businesses need a professional website in 2026 and what it costs to get started.",
    excerpt:
      "Social media pages and Google Business Profiles are not enough anymore. Here is why a professional website is the foundation of every successful local marketing strategy in 2026.",
    publishDate: "2026-03-15",
    author: "Jon Michael",
    category: "Web Design",
    readTime: "5 min read",
    content: [
      {
        type: "paragraph",
        text: "If you run a small business in San Antonio and you do not have a website, you are leaving money on the table every single day. That might sound dramatic, but the data backs it up: 97 percent of consumers search online for local businesses, and 75 percent judge a company's credibility based on its website design.",
      },
      {
        type: "heading",
        text: "Social Media Is Not a Substitute",
      },
      {
        type: "paragraph",
        text: "Facebook and Instagram are great tools for staying in touch with existing customers. But they are not designed to convert new customers. Algorithm changes can slash your visibility overnight, and you do not own your audience on social media. A website gives you a stable platform that you control completely.",
      },
      {
        type: "heading",
        text: "Google Rewards Businesses with Websites",
      },
      {
        type: "paragraph",
        text: "Google Business Profiles that link to a website consistently rank higher in local search results than profiles without one. When someone searches \"plumber near me\" or \"best tacos San Antonio,\" Google wants to show businesses that provide a complete online experience. A website signals legitimacy and relevance.",
      },
      {
        type: "heading",
        text: "What a Modern Small Business Website Needs",
      },
      {
        type: "list",
        items: [
          "Mobile-first design that loads in under two seconds on any phone",
          "Clear description of your services and service area",
          "Your phone number, address, and hours prominently displayed",
          "A contact form or online booking option for after-hours leads",
          "Customer reviews and testimonials for social proof",
          "Local SEO foundations including proper meta tags and schema markup",
        ],
      },
      {
        type: "heading",
        text: "It Does Not Have to Cost Thousands",
      },
      {
        type: "paragraph",
        text: "Many San Antonio business owners assume a professional website costs five or ten thousand dollars. It does not have to. At Pearl Street Digital, our one-time website builds start at $250 for a clean, fast, mobile-first site. No monthly contracts, no hidden fees, and no recurring charges unless you want managed hosting.",
      },
      {
        type: "heading",
        text: "The Real Cost of Not Having a Website",
      },
      {
        type: "paragraph",
        text: "Every day without a website is a day you are invisible to potential customers who are actively searching for what you offer. In a city with 1.5 million people and tens of thousands of small businesses, the ones that show up online are the ones that grow. The ones that do not get left behind.",
      },
      {
        type: "paragraph",
        text: "If you are ready to get your San Antonio business online with a professional website, Pearl Street Digital can have you up and running in two to three weeks. No contracts, no nonsense -- just a fast, modern website that works.",
      },
    ],
  },
  {
    slug: "google-business-profile-setup-guide-san-antonio",
    title:
      "The Complete Google Business Profile Setup Guide for San Antonio Businesses",
    metaTitle:
      "Google Business Profile Setup Guide San Antonio | Pearl Street Digital",
    metaDescription:
      "Step-by-step guide to setting up and optimizing your Google Business Profile for San Antonio local search. Get found on Google Maps and drive more customers.",
    excerpt:
      "Your Google Business Profile is the single most important factor in local search rankings. Here is exactly how to set it up and optimize it for San Antonio searches.",
    publishDate: "2026-03-01",
    author: "Jon Michael",
    category: "Local SEO",
    readTime: "7 min read",
    content: [
      {
        type: "paragraph",
        text: "If there is one thing every San Antonio business should do before spending a dollar on advertising, it is claiming and optimizing their Google Business Profile. This free listing determines whether your business shows up in the local map pack when customers search for your services nearby.",
      },
      {
        type: "heading",
        text: "Why Your Google Business Profile Matters",
      },
      {
        type: "paragraph",
        text: "When someone searches \"restaurant near me\" or \"auto repair San Antonio,\" Google shows a map with three businesses. That three-pack gets 44 percent of all clicks. If you are not in it, you are losing almost half of all potential customers to the businesses that are.",
      },
      {
        type: "heading",
        text: "Step 1: Claim and Verify Your Profile",
      },
      {
        type: "paragraph",
        text: "Go to business.google.com and search for your business. If it already exists, claim it. If not, create a new listing. Google will verify your ownership through a postcard, phone call, or email. Complete verification before making any optimization changes.",
      },
      {
        type: "heading",
        text: "Step 2: Complete Every Field",
      },
      {
        type: "list",
        items: [
          "Business name -- use your real business name, no keyword stuffing",
          "Primary category -- choose the most specific category available",
          "Secondary categories -- add all relevant categories",
          "Business description -- 750 characters describing what you do and where you serve",
          "Phone number -- use a local 210 area code number",
          "Website URL -- link to your homepage or a location-specific landing page",
          "Hours of operation -- keep these accurate and update for holidays",
          "Service area -- define your service area if you travel to customers",
        ],
      },
      {
        type: "heading",
        text: "Step 3: Add High-Quality Photos",
      },
      {
        type: "paragraph",
        text: "Businesses with photos receive 42 percent more requests for directions and 35 percent more website clicks. Upload at least 10 photos including your storefront, interior, team, and products or completed work. Update photos monthly to signal to Google that your listing is active.",
      },
      {
        type: "heading",
        text: "Step 4: Generate and Respond to Reviews",
      },
      {
        type: "paragraph",
        text: "Reviews are the number one ranking factor for the local map pack. Ask every satisfied customer to leave a Google review. Respond to every review -- positive and negative -- within 24 hours. A business with 50 reviews and a 4.7 rating will almost always outrank a competitor with 10 reviews.",
      },
      {
        type: "heading",
        text: "Step 5: Post Regular Updates",
      },
      {
        type: "paragraph",
        text: "Google Business Profile has a Posts feature that works like a mini social media feed. Share weekly updates about promotions, new services, community involvement, or helpful tips. Regular posting signals to Google that your business is active and engaged with customers.",
      },
      {
        type: "paragraph",
        text: "Setting up and optimizing your Google Business Profile takes about an hour of focused work. The return on that investment -- showing up when San Antonio customers search for exactly what you offer -- is worth more than almost any other marketing activity you can do.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Blog post not found: ${slug}`);
  return post;
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}
