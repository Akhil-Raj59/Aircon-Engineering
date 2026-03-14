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
import { notFound } from "next/navigation";
import { areas, brands, formatAreaName, formatBrandName } from "@/lib/seo-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const areaParams = areas.map((area) => ({ slug: `ac-service-in-${area}-gurgaon` }));
  const brandParams = brands.map((brand) => ({ slug: `${brand}-ac-service-gurgaon` }));
  return [...areaParams, ...brandParams];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Detect Area Page
  if (slug.startsWith("ac-service-in-") && slug.endsWith("-gurgaon")) {
    const area = slug.replace("ac-service-in-", "").replace("-gurgaon", "");
    const formattedArea = formatAreaName(area);
    return {
      title: `Best AC Service in ${formattedArea}, Gurgaon | Aircon Engineering`,
      description: `Expert AC repair, service, and installation in ${formattedArea}, Gurgaon. Same-day visit, transparent pricing, and 30-day warranty. Book now!`,
      keywords: [
        `AC service in ${formattedArea}`,
        `AC repair in ${formattedArea} Gurgaon`,
        `Split AC service ${formattedArea}`,
      ],
      alternates: { canonical: `https://www.aircon-engineering.com/${slug}` },
    };
  }

  // Detect Brand Page
  if (slug.endsWith("-ac-service-gurgaon") && !slug.startsWith("ac-service-in-")) {
    const brand = slug.replace("-ac-service-gurgaon", "");
    const formattedBrand = formatBrandName(brand);
    return {
      title: `Best ${formattedBrand} AC Service in Gurgaon | Expert Repair & Installation`,
      description: `Specialized ${formattedBrand} AC repair, service, and installation in Gurgaon. Verified technicians, genuine spare parts, same-day visit.`,
      keywords: [
        `${formattedBrand} AC service in Gurgaon`,
        `${formattedBrand} AC repair Gurgaon`,
        `${formattedBrand} Split AC service`,
      ],
      alternates: { canonical: `https://www.aircon-engineering.com/${slug}` },
    };
  }

  return {
    title: "AC Service in Gurgaon",
  };
}

export default async function DynamicSeoPage({ params }: Props) {
  const { slug } = await params;

  let h1Text = "";
  let dynamicLocation = "";
  
  if (slug.startsWith("ac-service-in-") && slug.endsWith("-gurgaon")) {
    const area = slug.replace("ac-service-in-", "").replace("-gurgaon", "");
    if (!areas.includes(area)) notFound();
    dynamicLocation = formatAreaName(area);
    h1Text = `Best AC Service in ${dynamicLocation}, Gurgaon, Haryana`;
  } else if (slug.endsWith("-ac-service-gurgaon") && !slug.startsWith("ac-service-in-")) {
    const brand = slug.replace("-ac-service-gurgaon", "");
    if (!brands.includes(brand)) notFound();
    dynamicLocation = formatBrandName(brand);
    h1Text = `Specialized ${dynamicLocation} AC Repair and Service in Gurgaon, Haryana`;
  } else {
    notFound();
  }

  return (
    <main>
      <Header />
      <h1 className="sr-only">{h1Text}</h1>
      <Hero dynamicLocation={dynamicLocation} />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Reviews />
      <ServiceAreas />
      <FAQ dynamicLocation={dynamicLocation} />
      <StickyCTA />
      <Footer />
    </main>
  );
}
