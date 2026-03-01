import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Pricing from "@/components/sections/Pricing";
import Reviews from "@/components/sections/Reviews";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import StickyCTA from "@/components/sections/StickyCTA";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <StickyCTA />
      <Footer />
    </main>
  );
}