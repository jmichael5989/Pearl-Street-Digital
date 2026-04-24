import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs from "@/components/sections/WhyUs";
import CustomDevelopmentCallout from "@/components/sections/CustomDevelopmentCallout";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <StatsBar />
        <WhyUs />
        <ServicesSection />
        <CustomDevelopmentCallout />
      </main>
      <Footer />
    </>
  );
}
