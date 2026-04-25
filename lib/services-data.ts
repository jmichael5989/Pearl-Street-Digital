export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  iconName: string;
  overview: {
    heading: string;
    paragraphs: string[];
    highlights: { label: string; value: string }[];
  };
  features: ServiceFeature[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export const services: ServiceData[] = [
  {
    slug: "website-design",
    title: "Website Design",
    tagline:
      "Custom websites built for speed, SEO, and conversions -- designed to represent your San Antonio business the way it deserves.",
    metaTitle: "Website Design San Antonio | Plans from $99/mo | Rank Point Media",
    metaDescription:
      "Custom Next.js websites for San Antonio small businesses. Lighthouse 95+, launched in 2-3 weeks, plans from $99/month with hosting included.",
    iconName: "globe",
    overview: {
      heading: "A Website That Works as Hard as You Do",
      paragraphs: [
        "Your website is the first thing most customers see. If it loads slowly, looks outdated, or does not work on a phone, you are losing business every single day. Rank Point Media builds fast, modern websites that are designed to convert visitors into calls, bookings, and sales.",
        "We use Next.js and modern web standards to deliver sites that score 95+ on Google Lighthouse, load in under two seconds, and look sharp on every device. Every project is founder-led -- you work directly with the person writing your code, not a rotating cast of account managers.",
      ],
      highlights: [
        { label: "Timeline", value: "2-3 Weeks" },
        { label: "Starter Plan", value: "$99/mo" },
        { label: "Lighthouse", value: "95+" },
        { label: "Revisions", value: "2-4 Rounds" },
      ],
    },
    features: [
      {
        title: "Custom Responsive Design",
        description:
          "Every site is built from scratch for your brand. No templates, no cookie-cutter layouts. Tested at 320px through 1440px.",
      },
      {
        title: "Built-In SEO Foundation",
        description:
          "Semantic HTML, schema markup, optimized meta tags, and fast load times so Google takes your site seriously from day one.",
      },
      {
        title: "Contact Form Integration",
        description:
          "Lead capture forms that work. Submissions go straight to your inbox so you never miss a potential customer.",
      },
      {
        title: "Mobile-First Development",
        description:
          "Over 60% of local searches happen on phones. Your site will look and perform perfectly on every screen size.",
      },
      {
        title: "Performance Optimized",
        description:
          "Optimized images, code splitting, and modern hosting on Vercel's edge network for sub-2-second load times.",
      },
      {
        title: "Full Ownership",
        description:
          "You own everything we build -- code, content, domain credentials. No lock-in, no hostage situations.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Discovery Call",
        description:
          "We learn about your business, goals, and competitors. You tell us what you need and we map out the best approach.",
      },
      {
        number: "02",
        title: "Design and Build",
        description:
          "We design and develop your site in 2-3 weeks. You see progress at every step and approve before we move forward.",
      },
      {
        number: "03",
        title: "Review and Revise",
        description:
          "You get revision rounds to fine-tune every detail. We do not launch until you are completely happy with the result.",
      },
      {
        number: "04",
        title: "Launch and Handoff",
        description:
          "We deploy your site, hand over all credentials, and provide post-launch support so you are never left hanging.",
      },
    ],
    faqs: [
      {
        question: "What platform do you build websites on?",
        answer:
          "We build with Next.js and modern web standards. This gives you a fast, secure, and fully customizable site. If you need WordPress for easy self-editing, we can do that too.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Most projects launch in 2-3 weeks. Simpler sites can go live even sooner. We give you a clear timeline before any work starts.",
      },
      {
        question: "Do I need to provide content and images?",
        answer:
          "We can work with what you have or help create content. We write realistic, SA-focused copy for your business and optimize all images for web performance.",
      },
      {
        question: "What happens after the site is live?",
        answer:
          "Every plan includes post-launch support (30-90 days depending on tier). We handle edits, fixes, and adjustments at no extra charge during that window.",
      },
      {
        question: "Can I update the site myself after launch?",
        answer:
          "If you choose a CMS-based build (WordPress), yes. For our standard Next.js builds, we handle updates or can set up a simple content management system for you.",
      },
    ],
    relatedSlugs: ["local-seo", "ppc-google-ads", "reputation-management"],
  },
  {
    slug: "local-seo",
    title: "SEO",
    tagline:
      "Rank higher on Google Maps and local search results so San Antonio customers find you first -- not your competitors.",
    metaTitle: "Local SEO San Antonio | Get Found on Google | Rank Point Media",
    metaDescription:
      "Local SEO services for San Antonio businesses. Google Maps optimization, citation building, and on-page SEO to drive more local customers to your door.",
    iconName: "search",
    overview: {
      heading: "Show Up When San Antonio Searches for You",
      paragraphs: [
        "When someone searches 'plumber near me' or 'best tacos in San Antonio,' Google decides who shows up first. Local SEO is how you get into that top spot. We optimize your Google Business Profile, build local citations, and tune your website so Google sees you as the most relevant result for your area.",
        "Most San Antonio businesses are leaving leads on the table because their online presence is not optimized for local search. We fix that with a systematic approach that targets the keywords your customers actually use, builds your authority in Google's eyes, and gets your phone ringing.",
      ],
      highlights: [
        { label: "Results In", value: "4-8 Weeks" },
        { label: "GBP Setup", value: "Included" },
        { label: "Citations", value: "40+" },
        { label: "Reporting", value: "Monthly" },
      ],
    },
    features: [
      {
        title: "Google Business Profile Optimization",
        description:
          "Complete setup and optimization of your GBP listing including categories, photos, services, posts, and Q&A management.",
      },
      {
        title: "Local Citation Building",
        description:
          "We list your business on 40+ authoritative directories with consistent NAP (Name, Address, Phone) data to build local authority.",
      },
      {
        title: "On-Page SEO Optimization",
        description:
          "Title tags, meta descriptions, header structure, and schema markup tuned for San Antonio-specific keywords.",
      },
      {
        title: "Review Strategy",
        description:
          "A system for generating more Google reviews and responding professionally to build your online reputation.",
      },
      {
        title: "Competitor Analysis",
        description:
          "We research what your top local competitors are doing right and find the gaps you can exploit to outrank them.",
      },
      {
        title: "Monthly Reporting",
        description:
          "Clear reports showing your ranking changes, traffic growth, and leads generated so you can see the ROI.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Local SEO Audit",
        description:
          "We audit your current online presence -- GBP, citations, website SEO, and competitor landscape in San Antonio.",
      },
      {
        number: "02",
        title: "Keyword Research",
        description:
          "We identify the exact search terms your San Antonio customers use and map them to your services and locations.",
      },
      {
        number: "03",
        title: "Optimize and Build",
        description:
          "We optimize your GBP, fix your website SEO, build citations, and implement schema markup across your site.",
      },
      {
        number: "04",
        title: "Monitor and Improve",
        description:
          "Ongoing tracking of rankings, traffic, and leads with monthly reports and continuous optimization.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see SEO results?",
        answer:
          "On-page improvements can show traction in 4-8 weeks. Competitive keywords may take 3-6 months to rank well. We set realistic expectations from the start.",
      },
      {
        question: "Do I need a website for local SEO?",
        answer:
          "A website helps significantly, but we can start with Google Business Profile optimization even without one. We recommend pairing SEO with a professional site for the best results.",
      },
      {
        question: "What is a Google Business Profile?",
        answer:
          "It is the free listing that shows up on Google Maps and in local search results. It displays your hours, reviews, photos, and contact info. It is the single most important local SEO asset.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No honest SEO provider can guarantee specific rankings -- Google's algorithm changes constantly. We guarantee consistent, measurable improvement and transparent reporting.",
      },
      {
        question: "Can you help with Google reviews?",
        answer:
          "Yes. We set up a review generation strategy and help you respond to reviews professionally. More reviews with higher ratings directly impact your local search visibility.",
      },
    ],
    relatedSlugs: ["website-design", "reputation-management", "ai-search-optimization"],
  },
  {
    slug: "social-media",
    title: "Social Media",
    tagline:
      "Strategic content and management across Instagram, Facebook, and LinkedIn that builds trust and drives engagement in the San Antonio market.",
    metaTitle: "Social Media Management San Antonio | Rank Point Media",
    metaDescription:
      "Social media marketing for San Antonio businesses. Content creation, scheduling, community management, and analytics across Instagram, Facebook, and LinkedIn.",
    iconName: "share",
    overview: {
      heading: "Build a Local Following That Converts",
      paragraphs: [
        "Social media is where your San Antonio customers hang out, read reviews, and decide who to trust with their money. A dead or inconsistent social presence tells potential customers you are not serious. We keep your profiles active, professional, and engaging.",
        "We handle content creation, scheduling, community management, and analytics so you can focus on running your business. Every post is crafted with your San Antonio audience in mind -- always on-brand, and designed to drive real engagement.",
      ],
      highlights: [
        { label: "Platforms", value: "2-3" },
        { label: "Posts/Month", value: "8-16" },
        { label: "Response Time", value: "4 Hours" },
        { label: "Reporting", value: "Monthly" },
      ],
    },
    features: [
      {
        title: "Content Creation",
        description:
          "AI-drafted, human-refined posts with graphics tailored to your brand. No generic stock photo content.",
      },
      {
        title: "Multi-Platform Management",
        description:
          "We manage Instagram, Facebook, LinkedIn, and Google Business Profile posts from a unified content calendar.",
      },
      {
        title: "Community Management",
        description:
          "We monitor and respond to comments, messages, and mentions so your audience feels heard and valued.",
      },
      {
        title: "Content Calendar",
        description:
          "A structured monthly calendar with approval workflows so you always know what is going out and when.",
      },
      {
        title: "Hashtag Strategy",
        description:
          "Local SA hashtags and industry-specific tags researched and applied to maximize reach in your target market.",
      },
      {
        title: "Performance Analytics",
        description:
          "Monthly reports on reach, engagement, follower growth, and top-performing content with actionable recommendations.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Brand Discovery",
        description:
          "We learn your voice, audience, and goals. You share examples of what you like and we build a style guide for your social presence.",
      },
      {
        number: "02",
        title: "Calendar Planning",
        description:
          "We create a monthly content calendar, get your approval, and prep all graphics and copy in advance.",
      },
      {
        number: "03",
        title: "Publish and Engage",
        description:
          "Posts go live on schedule. We monitor engagement and respond to your community in real time.",
      },
      {
        number: "04",
        title: "Report and Optimize",
        description:
          "Monthly analytics review. We identify what is working, pivot what is not, and refine the strategy.",
      },
    ],
    faqs: [
      {
        question: "Which social media platforms should I be on?",
        answer:
          "It depends on your industry. Restaurants do well on Instagram and Facebook. Professional services thrive on LinkedIn. We recommend the platforms where your customers actually spend time.",
      },
      {
        question: "Do you create all the content?",
        answer:
          "Yes. We handle copywriting, graphic design, and scheduling. You approve the content calendar before anything goes live.",
      },
      {
        question: "How many posts per month do you publish?",
        answer:
          "Depending on your plan, 8-16 posts per month across 2-3 platforms. We focus on quality over quantity -- every post has a purpose.",
      },
      {
        question: "Do you manage paid social ads?",
        answer:
          "Paid social ad management is available at our premium tier. For most small businesses, we recommend starting with organic content and adding paid once you have a solid foundation.",
      },
    ],
    relatedSlugs: ["website-design", "reputation-management", "ppc-google-ads"],
  },
  {
    slug: "ppc-google-ads",
    title: "Ad Campaigns",
    tagline:
      "Targeted ad campaigns that put your San Antonio business in front of customers actively searching for your services right now.",
    metaTitle: "Google Ads Management San Antonio | PPC Agency | Rank Point Media",
    metaDescription:
      "Google Ads and PPC management for San Antonio businesses. Targeted campaigns, keyword research, and conversion tracking. Pay only for results.",
    iconName: "target",
    overview: {
      heading: "Get Leads Today, Not Six Months From Now",
      paragraphs: [
        "SEO is a long game. Google Ads puts you at the top of search results today. When someone in San Antonio searches for your service, your ad appears first -- and you only pay when they click. It is the fastest path from zero to leads for local businesses.",
        "We build and manage campaigns that target the right keywords, write ads that get clicks, and optimize landing pages that convert. Every dollar of your ad spend is tracked, measured, and optimized for maximum return.",
      ],
      highlights: [
        { label: "Results In", value: "24-48 Hours" },
        { label: "Targeting", value: "San Antonio" },
        { label: "Tracking", value: "Full Funnel" },
        { label: "Reporting", value: "Weekly" },
      ],
    },
    features: [
      {
        title: "Campaign Strategy",
        description:
          "Custom campaign architecture based on your services, budget, and target areas within San Antonio.",
      },
      {
        title: "Keyword Research",
        description:
          "Deep research into what your SA customers are searching for, with negative keywords to avoid wasted spend.",
      },
      {
        title: "Ad Copywriting",
        description:
          "Compelling ad copy that highlights your unique value and drives qualified clicks from local searchers.",
      },
      {
        title: "Landing Page Optimization",
        description:
          "We optimize your landing pages for conversion so the traffic you pay for actually turns into leads and calls.",
      },
      {
        title: "Conversion Tracking",
        description:
          "Full tracking setup for calls, form submissions, and bookings so you know exactly what your ad spend generates.",
      },
      {
        title: "Weekly Optimization",
        description:
          "Continuous bid adjustments, A/B testing, and budget optimization to improve performance every week.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Account Setup",
        description:
          "We set up or audit your Google Ads account, install conversion tracking, and research your competitive landscape.",
      },
      {
        number: "02",
        title: "Campaign Build",
        description:
          "We build targeted campaigns with tight ad groups, compelling copy, and San Antonio geo-targeting.",
      },
      {
        number: "03",
        title: "Launch and Monitor",
        description:
          "Campaigns go live. We monitor performance daily and make adjustments to maximize your budget.",
      },
      {
        number: "04",
        title: "Optimize and Scale",
        description:
          "Weekly optimization reports. We cut what does not work, scale what does, and continuously improve ROI.",
      },
    ],
    faqs: [
      {
        question: "How much should I spend on Google Ads?",
        answer:
          "For most San Antonio small businesses, $500-$2,000/month in ad spend is a solid starting point. We can work with smaller budgets but results scale with investment.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Ads can start generating clicks within 24-48 hours of launch. It typically takes 2-4 weeks to optimize campaigns for peak performance.",
      },
      {
        question: "Do you manage the ad spend or is that separate?",
        answer:
          "Your ad spend goes directly to Google -- we never mark it up. Our management fee is separate and transparent.",
      },
      {
        question: "What if I have tried Google Ads before and it did not work?",
        answer:
          "Most failed Google Ads campaigns suffer from poor targeting, weak landing pages, or no conversion tracking. We fix all three.",
      },
      {
        question: "Can you target specific neighborhoods in San Antonio?",
        answer:
          "Yes. We can geo-target specific zip codes, neighborhoods, or radius areas around your business location.",
      },
    ],
    relatedSlugs: ["local-seo", "website-design", "ai-search-optimization"],
  },
  {
    slug: "ai-search-optimization",
    title: "AI Search Optimization",
    tagline:
      "Get your business recommended by ChatGPT, Google AI Overviews, and voice assistants. The next frontier of local visibility.",
    metaTitle: "AI Search Optimization San Antonio | GEO Services | Rank Point Media",
    metaDescription:
      "AI search optimization (GEO) for San Antonio businesses. Get recommended by ChatGPT, Google AI Overviews, Siri, and Alexa. Future-proof your online presence.",
    iconName: "sparkle",
    overview: {
      heading: "Be the Answer When AI Responds",
      paragraphs: [
        "The way people find businesses is changing. More and more searches happen through AI assistants -- ChatGPT, Google's AI Overviews, Siri, Alexa. When someone asks 'who is the best plumber in San Antonio,' you want to be the answer. That requires a different kind of optimization.",
        "Generative Engine Optimization (GEO) is the practice of structuring your online presence so AI systems can understand, trust, and recommend your business. We optimize your content, schema markup, and digital footprint to make your business AI-friendly.",
      ],
      highlights: [
        { label: "Emerging", value: "New Channel" },
        { label: "Approach", value: "GEO" },
        { label: "AI Systems", value: "5+" },
        { label: "Advantage", value: "First Mover" },
      ],
    },
    features: [
      {
        title: "Structured Data Optimization",
        description:
          "Comprehensive schema markup that helps AI systems understand your business, services, location, and reputation.",
      },
      {
        title: "Content Authority Building",
        description:
          "Content structured to be cited by AI models -- clear, factual, and authoritative answers to common questions.",
      },
      {
        title: "AI Platform Monitoring",
        description:
          "We track how your business appears in ChatGPT, Google AI Overviews, Bing Copilot, and other AI search tools.",
      },
      {
        title: "Knowledge Graph Optimization",
        description:
          "Building and strengthening your presence in Google's Knowledge Graph so AI has accurate data about your business.",
      },
      {
        title: "Voice Search Optimization",
        description:
          "Conversational content and FAQ structures optimized for Siri, Alexa, and Google Assistant queries.",
      },
      {
        title: "Competitive AI Audit",
        description:
          "Analysis of how AI systems currently perceive your competitors and where you can gain an advantage.",
      },
    ],
    process: [
      {
        number: "01",
        title: "AI Visibility Audit",
        description:
          "We test how AI systems currently respond to queries about your business and industry in San Antonio.",
      },
      {
        number: "02",
        title: "Strategy Development",
        description:
          "Based on the audit, we create a GEO strategy targeting the AI platforms most relevant to your customers.",
      },
      {
        number: "03",
        title: "Implementation",
        description:
          "We optimize your schema, content, and digital footprint to make your business more visible to AI systems.",
      },
      {
        number: "04",
        title: "Monitor and Adapt",
        description:
          "AI search evolves fast. We continuously monitor your AI visibility and adapt strategies as platforms change.",
      },
    ],
    faqs: [
      {
        question: "What is AI Search Optimization?",
        answer:
          "Also called Generative Engine Optimization (GEO), it is the practice of optimizing your online presence so AI systems like ChatGPT and Google AI Overviews recommend your business when users ask relevant questions.",
      },
      {
        question: "Is this different from regular SEO?",
        answer:
          "Yes. Traditional SEO focuses on ranking in search result lists. GEO focuses on being cited or recommended in AI-generated answers. Both are important, and they complement each other.",
      },
      {
        question: "Do I need this if I already do SEO?",
        answer:
          "SEO helps you rank in traditional results. But as more people use AI assistants to find businesses, GEO ensures you show up in that channel too. It is an emerging advantage most competitors are ignoring.",
      },
      {
        question: "How do you track AI search results?",
        answer:
          "We run regular queries across multiple AI platforms and document how your business appears. This is a manual and semi-automated process since AI platforms do not yet offer analytics dashboards.",
      },
      {
        question: "Is this relevant for small local businesses?",
        answer:
          "Absolutely. Local queries like 'best dentist in San Antonio' are increasingly answered by AI. Being optimized now gives you a first-mover advantage before your competitors catch on.",
      },
    ],
    relatedSlugs: ["local-seo", "website-design", "ppc-google-ads"],
  },
  {
    slug: "reputation-management",
    title: "Brand Management",
    tagline:
      "Monitor, respond to, and grow your online reviews. Build the 5-star reputation your San Antonio business has earned.",
    metaTitle: "Reputation Management San Antonio | Online Reviews | Rank Point Media",
    metaDescription:
      "Online reputation management for San Antonio businesses. Review monitoring, response management, and review generation to build trust and drive more customers.",
    iconName: "shield",
    overview: {
      heading: "Your Reputation Is Your Best Marketing",
      paragraphs: [
        "88% of consumers trust online reviews as much as personal recommendations. One bad review left unanswered can cost you dozens of customers. Reputation management is not optional anymore -- it is the foundation your other marketing efforts build on.",
        "We set up systems to generate more positive reviews, monitor what people say about your business across the web, and respond professionally to every review -- good or bad. Your reputation works for you 24/7, and we make sure it is working hard.",
      ],
      highlights: [
        { label: "Trust Factor", value: "88%" },
        { label: "Monitoring", value: "24/7" },
        { label: "Platforms", value: "5+" },
        { label: "Response", value: "Same Day" },
      ],
    },
    features: [
      {
        title: "Review Monitoring",
        description:
          "Real-time monitoring across Google, Yelp, Facebook, and industry-specific review sites for your San Antonio business.",
      },
      {
        title: "Response Management",
        description:
          "Professional, on-brand responses to every review -- positive and negative. We turn critics into advocates.",
      },
      {
        title: "Review Generation",
        description:
          "Automated and manual systems to encourage happy customers to leave reviews on the platforms that matter most.",
      },
      {
        title: "Sentiment Analysis",
        description:
          "Automated analysis of review trends to identify what customers love and where your business can improve.",
      },
      {
        title: "Competitor Benchmarking",
        description:
          "We track your competitors' review profiles so you know where you stand and what it takes to outperform them.",
      },
      {
        title: "Monthly Reports",
        description:
          "Clear reports showing review volume, average rating, response rate, and sentiment trends over time.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Reputation Audit",
        description:
          "We audit your current review profiles across all platforms and identify gaps, negative trends, and opportunities.",
      },
      {
        number: "02",
        title: "Strategy Setup",
        description:
          "We configure monitoring tools, create response templates, and set up review generation workflows.",
      },
      {
        number: "03",
        title: "Active Management",
        description:
          "Ongoing monitoring, response management, and review solicitation to steadily build your online reputation.",
      },
      {
        number: "04",
        title: "Report and Refine",
        description:
          "Monthly reviews of your reputation metrics with strategy adjustments to keep improving.",
      },
    ],
    faqs: [
      {
        question: "Can you remove bad reviews?",
        answer:
          "We cannot remove legitimate reviews, but we can help get fake or policy-violating reviews flagged for removal. More importantly, we bury negative reviews by generating a steady stream of positive ones.",
      },
      {
        question: "Which review platforms do you monitor?",
        answer:
          "Google, Yelp, Facebook, BBB, and industry-specific platforms like Healthgrades, Avvo, or HomeAdvisor depending on your business.",
      },
      {
        question: "How do you generate more reviews?",
        answer:
          "We set up automated follow-up systems (email and SMS) that ask happy customers to leave a review at the right moment. We also create in-store signage and QR codes.",
      },
      {
        question: "Should I respond to every review?",
        answer:
          "Yes. Responding to reviews -- especially negative ones -- shows potential customers you care. Google also factors review responses into local ranking signals.",
      },
      {
        question: "How quickly do you respond to reviews?",
        answer:
          "We aim for same-day response to all reviews. Negative reviews get priority attention to minimize potential damage.",
      },
    ],
    relatedSlugs: ["local-seo", "social-media", "website-design"],
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    tagline:
      "Turn one-time visitors into repeat San Antonio customers with email campaigns that actually get opened, read, and clicked.",
    metaTitle: "Email Marketing San Antonio | Campaigns & Automation | Rank Point Media",
    metaDescription:
      "Email marketing for San Antonio businesses. Campaign strategy, list building, template design, and automated flows that drive repeat sales and customer loyalty.",
    iconName: "mail",
    overview: {
      heading: "The Highest ROI Channel You're Probably Ignoring",
      paragraphs: [
        "For every dollar spent on email marketing, businesses earn an average of $36 back. It outperforms social media, ads, and SEO on pure return -- yet most San Antonio small businesses either never use it or send the wrong kind of emails. We fix both.",
        "We build campaigns that feel personal, not promotional. Segmented lists, clean templates, and automated flows that turn one-time customers into loyal repeat buyers. Everything is written in your voice and designed to drive measurable action.",
      ],
      highlights: [
        { label: "Avg ROI", value: "36:1" },
        { label: "Campaigns", value: "2-4/mo" },
        { label: "Setup", value: "2 Weeks" },
        { label: "Reporting", value: "Monthly" },
      ],
    },
    features: [
      {
        title: "Campaign Strategy",
        description:
          "A monthly calendar of promotions, announcements, and nurture emails tailored to your San Antonio audience and business goals.",
      },
      {
        title: "List Building and Segmentation",
        description:
          "We grow your subscriber list through website opt-ins and segment it so the right customers get the right messages.",
      },
      {
        title: "Template Design",
        description:
          "Branded, mobile-optimized email templates that look sharp in every inbox -- Gmail, Outlook, Apple Mail, and everywhere else.",
      },
      {
        title: "Automated Flows",
        description:
          "Welcome sequences, abandoned cart recovery, post-purchase follow-ups, and re-engagement campaigns that run 24/7.",
      },
      {
        title: "A/B Testing",
        description:
          "We test subject lines, send times, and content to continuously improve open rates and click-through performance.",
      },
      {
        title: "Deliverability Management",
        description:
          "Authentication setup (SPF, DKIM, DMARC) and list hygiene practices that keep your emails out of spam folders.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Audit and Setup",
        description:
          "We audit your current email setup (or set up a new ESP), configure authentication, and migrate any existing lists.",
      },
      {
        number: "02",
        title: "Strategy and Segmentation",
        description:
          "We map out a 90-day campaign plan, build segmentation logic, and design your core templates.",
      },
      {
        number: "03",
        title: "Send and Automate",
        description:
          "Campaigns go out on schedule. Automated flows trigger on customer actions. Every send is tracked end to end.",
      },
      {
        number: "04",
        title: "Report and Refine",
        description:
          "Monthly reports on open rates, clicks, revenue, and list growth. We refine subject lines, timing, and content each cycle.",
      },
    ],
    faqs: [
      {
        question: "Which email platform do you use?",
        answer:
          "We work with Mailchimp, Klaviyo, ConvertKit, and most major ESPs. We recommend the platform that fits your list size, budget, and e-commerce setup.",
      },
      {
        question: "How often will you send emails to my list?",
        answer:
          "Typically 2-4 campaigns per month plus automated flows. Too few and subscribers forget you. Too many and they unsubscribe. We find the right cadence for your audience.",
      },
      {
        question: "What if I do not have an email list yet?",
        answer:
          "We set up website opt-ins, lead magnets, and at-checkout signups to start growing your list from zero. Most clients see steady growth within the first 60 days.",
      },
      {
        question: "Can you write the emails for me?",
        answer:
          "Yes. Copywriting is included. We write in your voice, often using AI drafts refined by a human, so your emails sound authentic and drive action.",
      },
    ],
    relatedSlugs: ["social-media", "website-design", "custom-ai-solutions"],
  },
  {
    slug: "custom-ai-solutions",
    title: "Custom AI Solutions",
    tagline:
      "Custom artificial intelligence tools built for your business -- automated follow-ups, intelligent lead qualification, and workflow automation that gives you an unfair advantage.",
    metaTitle: "Custom AI Solutions San Antonio | Automation & Agents | Rank Point Media",
    metaDescription:
      "Custom AI solutions for San Antonio businesses. Automated customer follow-ups, lead qualification, chatbots, and workflow automation tailored to your specific operation.",
    iconName: "cpu",
    overview: {
      heading: "AI That Actually Works for Your Business",
      paragraphs: [
        "Most agencies talk about AI. We build it. Our team creates custom artificial intelligence solutions tailored to your specific San Antonio business -- automated customer follow-ups, intelligent lead qualification, 24/7 chatbots that sound like you, and workflow automation that frees up hours every week.",
        "This is not generic ChatGPT wrappers. We integrate directly with your CRM, email, scheduling, and operations tools. The result: a system that works while you sleep, qualifies leads while you handle the ones that matter, and scales without hiring.",
      ],
      highlights: [
        { label: "Approach", value: "Custom-Built" },
        { label: "Integrations", value: "Unlimited" },
        { label: "Availability", value: "24/7" },
        { label: "Training", value: "Included" },
      ],
    },
    features: [
      {
        title: "Automated Customer Follow-Ups",
        description:
          "AI that reaches out to leads and past customers via email or SMS with personalized messages -- without ever feeling like spam.",
      },
      {
        title: "Lead Qualification Agents",
        description:
          "Conversational AI that asks the right questions, scores leads, and routes the qualified ones straight to your phone or calendar.",
      },
      {
        title: "Custom Chatbots",
        description:
          "Website and messaging chatbots trained on your business, services, and FAQs -- answering customers in your voice, 24 hours a day.",
      },
      {
        title: "Workflow Automation",
        description:
          "Workflow automation across your CRM, email, scheduling, and operations tools. Cut repetitive tasks and save hours every week.",
      },
      {
        title: "Voice AI and Transcription",
        description:
          "Voicemail-to-text with summaries, AI call answering for after hours, and automatic note-taking for sales and consult calls.",
      },
      {
        title: "Training and Support",
        description:
          "We train your team on the tools we build and provide ongoing support as your needs evolve and the technology improves.",
      },
    ],
    process: [
      {
        number: "01",
        title: "Discovery and Audit",
        description:
          "We learn your business, map your repetitive tasks, and identify the highest-ROI opportunities for AI automation.",
      },
      {
        number: "02",
        title: "Solution Design",
        description:
          "We design a custom AI system that fits your workflow -- not a generic tool you have to bend your business around.",
      },
      {
        number: "03",
        title: "Build and Integrate",
        description:
          "We build, test, and integrate the solution with your existing tools. Everything is configured and validated before launch.",
      },
      {
        number: "04",
        title: "Deploy and Iterate",
        description:
          "Your AI goes live. We monitor performance, train your team, and continuously refine the system as your business grows.",
      },
    ],
    faqs: [
      {
        question: "What kinds of AI solutions do you build?",
        answer:
          "Automated follow-up systems, lead qualification bots, custom chatbots, workflow automation, voice AI, and bespoke integrations. If a task is repetitive and rule-based, AI can likely handle it.",
      },
      {
        question: "Do I need a technical team to use this?",
        answer:
          "No. We design solutions that run in the background. Your team interacts with tools they already know -- CRM, email, scheduling. The AI works underneath.",
      },
      {
        question: "Is my customer data safe?",
        answer:
          "Yes. We use enterprise-grade providers (OpenAI, Anthropic, Google) with data privacy controls, and we never train public models on your data. All integrations follow industry security best practices.",
      },
      {
        question: "How much does a custom AI solution cost?",
        answer:
          "It depends on complexity. Simple automations start around $500 one-time. Full-scale custom agents and integrations range from $2,000-$10,000+. We scope and quote every project upfront.",
      },
      {
        question: "Can you integrate with my existing CRM or tools?",
        answer:
          "Yes. We work with HubSpot, Salesforce, Go High Level, Zoho, Pipedrive, and most major platforms. For niche or legacy tools, we build custom API integrations.",
      },
    ],
    relatedSlugs: ["ai-search-optimization", "website-design", "email-marketing"],
  },
];

export function getService(slug: string): ServiceData {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Service not found: ${slug}`);
  return service;
}

export function getRelatedServices(slugs: string[]): ServiceData[] {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is ServiceData => s !== undefined);
}
