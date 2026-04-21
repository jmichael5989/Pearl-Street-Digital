import Header from "@/components/ui/Header";
import HeroMediaCycle from "@/components/sections/HeroMediaCycle";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import Pricing from "@/components/sections/Pricing";
import WhyUs from "@/components/sections/WhyUs";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroMediaCycle />
        <StatsBar />
        <WhyUs />
        <ServicesSection />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
