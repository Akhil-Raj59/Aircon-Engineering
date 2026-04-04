"use client";

import { phoneNumber } from "@/lib/constants";

export default function Pricing() {
  const pricingData = [
    { service: "AC General Service", price: "₹399 onwards" },
    { service: "AC Repair Visit Charge", price: "₹299 inspection" },
    { service: "AC Gas Filling", price: "₹2,699 onwards" },
    { service: "Split AC Installation", price: "₹1,500 onwards" },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            AC Service Pricing in Gurgaon
          </h2>
          <p className="text-muted-foreground">
            Affordable AC repair & servicing with transparent charges.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="border rounded-2xl overflow-hidden">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-5 border-b last:border-b-0"
            >
              <span className="font-medium">{item.service}</span>
              <span className="text-blue-600 font-semibold">{item.price}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={`tel:+${phoneNumber}`}
            className="primary-btn inline-block"
          >
            Call Now to Book Service
          </a>
        </div>

      </div>
    </section>
  );
}