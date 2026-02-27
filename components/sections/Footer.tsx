"use client";

import { phoneNumber } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Aircon Engineering
          </h3>
          <p className="text-gray-400 text-sm">
            Professional AC repair & servicing in Gurgaon.
            Same day service, affordable pricing & certified technicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm mb-2">
            Gurgaon, Haryana
          </p>
          <p className="text-gray-400 text-sm mb-2">
            Phone: +{phoneNumber}
          </p>
          <a
            href={`tel:+${phoneNumber}`}
            className="inline-block mt-4 bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
          >
            Call Now
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-xs">
        © {new Date().getFullYear()} Aircon Engineering. All rights reserved.
      </div>
    </footer>
  );
}