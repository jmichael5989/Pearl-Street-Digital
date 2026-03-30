export interface IndustryPainPoint {
  title: string;
  description: string;
}

export interface IndustrySolution {
  title: string;
  description: string;
  serviceSlug: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubtitle: string;
  painPoints: IndustryPainPoint[];
  solutions: IndustrySolution[];
  pricingTier: {
    name: string;
    price: string;
    description: string;
  };
  faqs: IndustryFAQ[];
}

export const industries: IndustryData[] = [
  {
    slug: "restaurants",
    title: "Restaurants & Food Trucks",
    metaTitle:
      "Restaurant Website Design San Antonio | Pearl Street Digital",
    metaDescription:
      "Website design and digital marketing for San Antonio restaurants, food trucks, and catering businesses. Get found on Google Maps, drive online orders, and fill more seats.",
    heroHeading:
      "Restaurant Website Design and Marketing in San Antonio",
    heroSubtitle:
      "San Antonio welcomes 36.8 million visitors a year and holds a UNESCO Creative City of Gastronomy designation. If your restaurant does not show up when someone searches \"best tacos near me,\" you are losing customers every single day.",
    painPoints: [
      {
        title: "Invisible on Google Maps",
        description:
          "Customers search for restaurants near them, and your competitors show up first. Without an optimized Google Business Profile, your restaurant might as well not exist online.",
      },
      {
        title: "Outdated or No Website",
        description:
          "Your menu is a blurry photo on Facebook. Customers cannot find your hours, your location, or a link to order online. They move on to the next result.",
      },
      {
        title: "Bad Photos Driving Customers Away",
        description:
          "Low-quality photos on your Google listing and Yelp page make your food look worse than it is. First impressions happen online now, not at the door.",
      },
      {
        title: "Losing to Chains with Bigger Budgets",
        description:
          "National chains spend thousands on digital marketing every month. Without a strategy, independent restaurants in San Antonio cannot compete for the same search results.",
      },
    ],
    solutions: [
      {
        title: "Google Business Profile Optimization",
        description:
          "We optimize your Google Business Profile so you show up in the local map pack when customers search for restaurants in your area. Accurate hours, categories, photos, and review responses.",
        serviceSlug: "local-seo",
      },
      {
        title: "Fast, Mobile-First Website",
        description:
          "A modern website with your menu, hours, location, and online ordering links -- built to load in under two seconds on any phone. Designed to convert hungry searchers into paying customers.",
        serviceSlug: "website-design",
      },
      {
        title: "Review Generation and Management",
        description:
          "We help you build a steady stream of five-star Google reviews and respond to every review professionally. More reviews means higher rankings and more trust.",
        serviceSlug: "reputation-management",
      },
      {
        title: "Local SEO for Food Searches",
        description:
          "Targeted SEO for high-intent searches like \"best tacos San Antonio,\" \"food trucks near me,\" and \"catering San Antonio.\" We put you in front of customers who are ready to eat.",
        serviceSlug: "local-seo",
      },
    ],
    pricingTier: {
      name: "Business",
      price: "$500",
      description:
        "Most San Antonio restaurants start with our Business tier -- a custom website with online ordering links, Google Business Profile setup, and foundational local SEO. One-time build, no contracts.",
    },
    faqs: [
      {
        question:
          "How long does it take to build a restaurant website?",
        answer:
          "Most restaurant websites are completed in two to three weeks. We start with your menu, hours, and branding, then deliver a fast, mobile-first site with everything customers need to find you and place an order.",
      },
      {
        question:
          "Can you help my restaurant show up on Google Maps?",
        answer:
          "Yes. Google Business Profile optimization is one of our core services. We set up and optimize your profile with accurate categories, photos, hours, and review management so you rank higher in local map results.",
      },
      {
        question:
          "Do you work with food trucks and catering businesses?",
        answer:
          "Absolutely. Food trucks and catering companies have unique needs -- service area listings, event calendars, and mobile-friendly menus. We build sites and marketing strategies tailored to how your business operates.",
      },
      {
        question: "What if I already have a website but it is outdated?",
        answer:
          "We can rebuild your site on modern technology that loads fast and ranks well. Many restaurant owners come to us with a site that was built years ago and no longer works on phones or shows up in search results.",
      },
    ],
  },
  {
    slug: "beauty",
    title: "Beauty Salons & Barber Shops",
    metaTitle:
      "Salon & Barber Shop Website Design San Antonio | Pearl Street Digital",
    metaDescription:
      "Website design and marketing for San Antonio salons, barber shops, and beauty businesses. Get found online, fill your appointment book, and grow your client base.",
    heroHeading:
      "Website Design and Marketing for San Antonio Salons and Barber Shops",
    heroSubtitle:
      "Your clients are searching \"barber shop near me\" and \"best salon San Antonio\" right now. If your business does not show up, they are booking with someone else.",
    painPoints: [
      {
        title: "Still Booking by Phone Only",
        description:
          "Clients want to book online at midnight, not call during business hours. If your only booking method is a phone call, you are losing appointments to salons that offer online scheduling.",
      },
      {
        title: "No Professional Online Presence",
        description:
          "Your best work lives on Instagram, but Instagram does not rank on Google. Without a website, potential clients who search for salons in San Antonio will never find you.",
      },
      {
        title: "Relying Solely on Social Media",
        description:
          "Social media algorithms change constantly. One update can cut your reach in half overnight. A website you own gives you a stable foundation that no algorithm can take away.",
      },
      {
        title: "Not Showing Up for Local Searches",
        description:
          "When someone searches \"barber shop near me\" or \"hair salon San Antonio,\" your competitors appear first because they have optimized websites and Google Business Profiles.",
      },
    ],
    solutions: [
      {
        title: "Website with Online Booking",
        description:
          "A professional website that showcases your work, lists your services and prices, and integrates with your booking platform so clients can schedule appointments 24/7.",
        serviceSlug: "website-design",
      },
      {
        title: "Google Business Profile Setup",
        description:
          "We build and optimize your Google Business Profile with professional photos, accurate service categories, and review management so you show up when locals search for salons and barbers.",
        serviceSlug: "local-seo",
      },
      {
        title: "Review Generation Strategy",
        description:
          "Happy clients are your best marketing. We set up automated review requests and help you respond professionally to build a five-star reputation that attracts new clients.",
        serviceSlug: "reputation-management",
      },
      {
        title: "Social Media Management",
        description:
          "We help you maintain a consistent social media presence that complements your website -- showcasing your work, promoting specials, and driving followers to book online.",
        serviceSlug: "social-media",
      },
    ],
    pricingTier: {
      name: "Business",
      price: "$500",
      description:
        "Our Business tier is perfect for salons and barber shops -- a custom website with booking integration, a services gallery, and Google Business Profile optimization. One-time build, no contracts.",
    },
    faqs: [
      {
        question:
          "Can you integrate my website with my booking software?",
        answer:
          "Yes. We integrate with popular booking platforms like Square Appointments, Booksy, Vagaro, and StyleSeat. Your clients can book directly from your website without leaving the page.",
      },
      {
        question:
          "How do I get more Google reviews for my salon?",
        answer:
          "We set up a simple review request workflow -- after each appointment, your client receives a friendly text or email with a direct link to leave a Google review. More reviews mean higher local rankings.",
      },
      {
        question: "Do I still need a website if I have an Instagram?",
        answer:
          "Yes. Instagram is great for showcasing your work, but it does not rank on Google. When someone searches \"barber shop near me,\" Google shows websites and Google Business Profiles, not Instagram pages. You need both.",
      },
      {
        question:
          "How long does it take to start showing up on Google?",
        answer:
          "Google Business Profile optimization can start showing results within two to four weeks. Local SEO improvements build over time, with most businesses seeing meaningful ranking changes within 60 to 90 days.",
      },
    ],
  },
  {
    slug: "auto",
    title: "Auto Repair & Detailing",
    metaTitle:
      "Auto Repair Website Design San Antonio | Pearl Street Digital",
    metaDescription:
      "Website design and digital marketing for San Antonio auto repair shops, mechanics, and detailing businesses. Get found online and bring more cars through your bay doors.",
    heroHeading:
      "Auto Repair and Detailing Website Design in San Antonio",
    heroSubtitle:
      "When a car breaks down, the owner grabs their phone and searches \"auto repair near me.\" If your shop does not show up in those results, the job goes to someone else.",
    painPoints: [
      {
        title: "Losing to Chain Shops Online",
        description:
          "National chains like Jiffy Lube and Firestone dominate search results with massive marketing budgets. Independent shops need a smart digital strategy to compete for the same local customers.",
      },
      {
        title: "No Online Review Strategy",
        description:
          "Customers trust online reviews as much as personal recommendations. Without a system to generate and manage reviews, you are letting your best advertising go to waste.",
      },
      {
        title: "Website from 2015 That Does Not Work on Phones",
        description:
          "More than 60 percent of local searches happen on mobile devices. If your website is slow, broken on phones, or just looks outdated, customers will hit the back button and call your competitor.",
      },
      {
        title: "No Way to Book or Request Quotes Online",
        description:
          "Customers expect to request appointments or quotes online. If they have to call during business hours, many will choose the shop that lets them submit a request at any time.",
      },
    ],
    solutions: [
      {
        title: "Mobile-First Professional Website",
        description:
          "A modern website that loads fast on any phone, lists your services and specialties, and includes an online quote request form. Built to convert searchers into customers.",
        serviceSlug: "website-design",
      },
      {
        title: "Google Business Profile Optimization",
        description:
          "We optimize your Google listing with accurate service categories, professional photos, business hours, and review responses so you appear in the local map pack for auto repair searches.",
        serviceSlug: "local-seo",
      },
      {
        title: "Review Management System",
        description:
          "We build a review generation workflow that helps you collect five-star reviews from satisfied customers and respond to every review to build trust with future clients.",
        serviceSlug: "reputation-management",
      },
      {
        title: "Local SEO for Auto Searches",
        description:
          "Targeted optimization for searches like \"auto repair near me,\" \"oil change San Antonio,\" and \"mobile detailing San Antonio.\" We help you rank where customers are already searching.",
        serviceSlug: "local-seo",
      },
    ],
    pricingTier: {
      name: "Business",
      price: "$500",
      description:
        "Most auto shops start with our Business tier -- a professional website with quote request forms, Google Business Profile setup, and local SEO foundations. One-time build, no contracts.",
    },
    faqs: [
      {
        question:
          "How much does a website for an auto repair shop cost?",
        answer:
          "Our Business tier starts at $500 for a complete website with service listings, quote request forms, and Google Business Profile optimization. No monthly contracts and no hidden fees.",
      },
      {
        question:
          "Can you help my shop rank above chain auto repair businesses?",
        answer:
          "Yes. Local SEO gives independent shops a real advantage. Google favors businesses with strong local signals -- reviews, accurate business information, and locally relevant content. We build all of that for you.",
      },
      {
        question:
          "Do you work with mobile detailing and specialty shops?",
        answer:
          "Absolutely. Mobile detailing, specialty repair, custom shops, and tire businesses all benefit from a strong online presence. We tailor your website and SEO strategy to your specific services and service area.",
      },
      {
        question:
          "How do I get more customers to leave reviews?",
        answer:
          "We set up an automated review request system that sends a follow-up message to customers after their service is complete. A direct link to your Google review page makes it easy for satisfied customers to leave feedback.",
      },
    ],
  },
];

export function getIndustry(slug: string): IndustryData {
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) throw new Error(`Industry not found: ${slug}`);
  return industry;
}

export function getAllIndustries(): IndustryData[] {
  return industries;
}
