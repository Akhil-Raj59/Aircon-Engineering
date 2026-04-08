"use client";

import Image from "next/image";
// import { phoneNumber } from "@/lib/constants";

const phoneNumber = "918860186269";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/logo.png"
              alt="Townairncr Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Professional AC repair & servicing in Gurgaon.
            Same-day service, affordable pricing & certified technicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="/#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/#pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info & Brands/Areas */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Contact & Coverage
          </h4>

          <p className="text-sm mb-2">Gurgaon, Haryana</p>
          <p className="text-sm mb-2">
            Phone:{" "}
            <a
              href={`tel:+${phoneNumber}`}
              className="hover:text-white transition cursor-pointer"
            >
              +(91) 88601-86269
            </a>
          </p>

          <p className="text-sm mb-6">
            Email:{" "}
            <a
              href="mailto:care@townairncr.com"
              className="hover:text-white transition cursor-pointer"
            >
              care@townairncr.com
            </a>
          </p>
          
          <div className="flex gap-8">
            <ul className="space-y-2 text-xs">
              <li className="text-gray-500 font-semibold mb-1">Top Areas</li>
              <li><a href="/ac-service-in-dlf-phase-1-gurgaon" className="hover:text-white transition">DLF Phase 1</a></li>
              <li><a href="/ac-service-in-sector-56-gurgaon" className="hover:text-white transition">Sector 56</a></li>
              <li><a href="/ac-service-in-sohna-road-gurgaon" className="hover:text-white transition">Sohna Road</a></li>
            </ul>
             <ul className="space-y-2 text-xs">
              <li className="text-gray-500 font-semibold mb-1">Top Brands</li>
              <li><a href="/voltas-ac-service-gurgaon" className="hover:text-white transition">Voltas</a></li>
              <li><a href="/daikin-ac-service-gurgaon" className="hover:text-white transition">Daikin</a></li>
              <li><a href="/lg-ac-service-gurgaon" className="hover:text-white transition">LG</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-5 text-gray-500 text-xs">
        © {new Date().getFullYear()} Townairncr. All rights reserved.
      </div>
    </footer>
  );
}