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
  metadataBase: new URL("https://aircon-engineering.com"),
  title: "Ac Service & Repair in Gurgaon | Aircon Engineering",
  description:
    "Affordable AC repair, gas filling, installation & maintenance in Gurgaon. Same day service with trained technicians.",
  keywords: [
    "AC service in Gurgaon",
    "AC repair Gurgaon",
    "AC gas filling Gurgaon",
    "AC installation Gurgaon",
  ],
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