import Footer from "@/components/ui/Footer";
import ServicesHeader from "@/components/services/ServicesHeader";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="services-scope min-h-screen flex flex-col">
      <ServicesHeader />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
