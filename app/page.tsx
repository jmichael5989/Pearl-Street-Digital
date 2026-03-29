import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs from "@/components/sections/WhyUs";
import IndustriesSection from "@/components/sections/IndustriesSection";
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
      </main>
      <Footer />
    </>
  );
}
