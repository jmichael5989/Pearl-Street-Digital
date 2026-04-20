export type HeroSlide = {
  id: string;
  type: "video" | "image";
  src: string;
  poster?: string;
  duration: number;
  headline: string;
  subhead: string;
  theme?: "dark" | "light";
};

export const heroSlides: HeroSlide[] = [
  {
    id: "sa-skyline",
    type: "video",
    src: "/videos/sa-skyline.mp4",
    poster: "/images/sa-skyline-poster.webp",
    duration: 5000,
    headline: "Built for San Antonio businesses",
    subhead: "Local expertise. Real results. No fluff.",
  },
  {
    id: "local-business",
    type: "video",
    src: "/videos/local-business.mp4",
    poster: "/images/local-business-poster.webp",
    duration: 5000,
    headline: "Websites that bring in customers",
    subhead: "Fast, conversion-focused sites built to rank.",
  },
  {
    id: "search-results",
    type: "video",
    src: "/videos/search-results.mp4",
    poster: "/images/search-results.webp",
    duration: 5000,
    headline: "Dominate local search results",
    subhead: "Local SEO that puts you on the map -- literally.",
    theme: "light",
  },
  {
    id: "happy-customer",
    type: "video",
    src: "/videos/happy-customer.mp4",
    poster: "/images/happy-customer-poster.webp",
    duration: 5000,
    headline: "Real growth. Real results.",
    subhead: "Watch your customer pipeline fill up.",
  },
  {
    id: "business-growth",
    type: "video",
    src: "/videos/business-growth.mp4",
    poster: "/images/business-growth-poster.webp",
    duration: 5000,
    headline: "Rank Point Media",
    subhead: "Higher rankings. More customers.",
    theme: "light",
  },
];
