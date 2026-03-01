"use client";

import Image from "next/image";
import { phoneNumber } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/assets/logo.png"
              alt="Aircon Engineering Logo"
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
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
            Contact
          </h4>

          <p className="text-sm mb-2">Gurgaon, Haryana</p>

          <p className="text-sm mb-2">
            Phone:{" "}
            <a
              href={`tel:+${phoneNumber}`}
              className="hover:text-white transition"
            >
              +{phoneNumber}
            </a>
          </p>

          <p className="text-sm mb-4">
            Email:{" "}
            <a
              href="mailto:support@airconengineering.in"
              className="hover:text-white transition"
            >
              support@airconengineering.in
            </a>
          </p>

          <a
            href={`tel:+${phoneNumber}`}
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-5 py-2.5 rounded-lg text-sm font-medium text-white"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-5 text-gray-500 text-xs">
        © {new Date().getFullYear()} Aircon Engineering. All rights reserved.
      </div>
    </footer>
  );
}