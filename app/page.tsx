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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AC Service & Repair in Gurgaon | Townairncr (formerly Aircon Engineering)",
  alternates: {
    canonical: "https://www.aircon-engineering.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Townairncr",
    image: "https://www.aircon-engineering.com/assets/logo.png",
    "@id": "https://www.aircon-engineering.com",
    url: "https://www.aircon-engineering.com",
    telephone: "+91-8920741906",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gurgaon",
      addressLocality: "Gurgaon",
      addressRegion: "HR",
      postalCode: "122001",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.4595,
      longitude: 77.0266
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "08:00",
      closes: "21:00"
    },
    sameAs: [
      "https://www.aircon-engineering.com"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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