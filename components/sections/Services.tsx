"use client";

import { services, phoneNumber } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Our AC Services in Gurgaon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional AC servicing, repair & installation with transparent pricing.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 hover:shadow-lg transition duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>

              <p className="text-blue-600 font-medium mb-5">
                {service.price}
              </p>

              <a
                href={`tel:+${phoneNumber}`}
                className="primary-btn w-full text-center block"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}