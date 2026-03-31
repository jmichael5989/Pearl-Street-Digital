import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs from "@/components/sections/WhyUs";
import IndustriesSection from "@/components/sections/IndustriesSection";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import QuoteEstimator from "@/components/sections/QuoteEstimator";
import FAQ from "@/components/sections/FAQ";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <ServicesSection />
        <WhyUs />
        <IndustriesSection />
        <Testimonials />
        <Pricing />
        <Process />
        <About />
        <QuoteEstimator />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
