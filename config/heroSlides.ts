export type HeroSlide = {
  id: string;
  type: "video" | "image";
  src: string;
  poster?: string;
  duration: number;
  headline: string;
  headlineParts?: {
    before: string;
    highlight: string;
    after?: string;
  };
  subhead: string;
  theme?: "dark" | "light";
};

export const heroSlides: HeroSlide[] = [
  {
    id: "sa-skyline",
    type: "video",
    src: "/videos/sa-skyline.mp4",
    poster: "/images/sa-skyline-poster.webp",
    duration: 9300,
    headline: "Outrank. Outperform. Outlast.",
    headlineParts: {
      before: "",
      highlight: "Outrank.",
      after: " Outperform. Outlast.",
    },
    subhead:
      "Websites, SEO, and AI solutions at a fraction of what the big agencies charge.",
  },
  {
    id: "local-business",
    type: "video",
    src: "/videos/local-business.mp4",
    poster: "/images/local-business-poster.webp",
    duration: 5000,
    headline: "Websites that bring in customers",
    headlineParts: {
      before: "Websites that ",
      highlight: "bring in customers",
    },
    subhead: "Fast, conversion-focused sites built to rank.",
  },
  {
    id: "happy-customer",
    type: "video",
    src: "/videos/happy-customer.mp4",
    poster: "/images/happy-customer-poster.webp",
    duration: 5000,
    headline: "Real growth. Real results.",
    headlineParts: {
      before: "",
      highlight: "Real growth.",
      after: " Real results.",
    },
    subhead: "Watch your customer pipeline fill up.",
  },
];
