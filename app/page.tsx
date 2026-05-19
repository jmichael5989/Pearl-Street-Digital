import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUs from "@/components/sections/WhyUs";
import CustomDevelopmentCallout from "@/components/sections/CustomDevelopmentCallout";
import ContactContent from "@/components/contact/ContactContent";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyUs />
        <ServicesSection />
        <CustomDevelopmentCallout numeral="04" />
        <ContactContent numeral="05" />
      </main>
      <Footer hidePreFooterCTA />
    </>
  );
}
