import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import { Providers } from "@/components/providers";
import { Space_Grotesk, Inter } from "next/font/google";
import { Toaster } from "sonner";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});


export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    
    shortcut: '/favicon.ico',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Kreative Werbung Labs",
  description: "Creative video production & motion design studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable}`}>
      
        <Providers>
          
          
          {children}
          <Toaster richColors />

        </Providers>
      </body>
    </html>
  );
}
