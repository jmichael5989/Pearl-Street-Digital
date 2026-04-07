import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs from "@/components/sections/WhyUs";
import IndustriesSection from "@/components/sections/IndustriesSection";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <StatsBar />
        <ServicesSection />
        <WhyUs />
        <IndustriesSection />
        <Testimonials />
        <Pricing />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
