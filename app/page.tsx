import Hero from "@/components/sections/Hero";
import Consultation from "@/components/sections/Consultation";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs from "@/components/sections/WhyUs";
import CustomDevelopmentCallout from "@/components/sections/CustomDevelopmentCallout";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyUs />
        <ServicesSection />
        <CustomDevelopmentCallout numeral="04" />
        <Consultation />
      </main>
      <Footer hidePreFooterCTA />
    </>
  );
}
