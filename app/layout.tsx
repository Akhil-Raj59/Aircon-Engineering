import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import StickyCTA from "@/components/sections/StickyCTA";  
import { SearchProvider } from "@/components/SearchContext";

const headingFont = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aircon-engineering.com"),
  title: "Best AC Service & Repair in Gurgaon | Townairncr (formerly Aircon Engineering)",
  description:
    "Top-rated and affordable AC repair, gas filling, professional installation & maintenance in Gurgaon. Same-day service with verified, expert technicians. 100% Cooling Guaranteed.",
  keywords: [
    "AC service in Gurgaon",
    "AC repair Gurgaon",
    "AC gas filling Gurgaon",
    "AC installation Gurgaon",
    "Best AC repair near me",
    "Split AC service Gurgaon",
    "Window AC repair Gurgaon",
    "Air conditioner maintenance",
    "Same day AC service Gurgaon",
    "AC technician in Gurgaon"
  ],
  authors: [{ name: "Townairncr" }],
  creator: "Townairncr",
  publisher: "Townairncr",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.aircon-engineering.com",
    title: "Best AC Service & Repair in Gurgaon | Townairncr (formerly Aircon Engineering)",
    description: "Expert AC repair, installation, and gas charging in Gurgaon. Book skilled technicians for same-day service.",
    siteName: "Townairncr",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "Townairncr Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AC Service & Repair in Gurgaon | Townairncr (formerly Aircon Engineering)",
    description: "Expert AC repair, installation, and gas charging in Gurgaon.",
    images: ["/assets/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "lESDnxClpLDz2OanIT-V4Ya1nDwNJSGobeGrMgEY1Xk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <SearchProvider>
        
        {children}
        </SearchProvider>
        

        
        <StickyCTA />

      </body>
    </html>
  );
}