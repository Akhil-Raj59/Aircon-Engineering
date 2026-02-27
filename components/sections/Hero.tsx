"use client";

import { phoneNumber } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      
      {/* Container */}
      <div className="section-padding max-w-6xl mx-auto text-center">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          ⭐ 4.8 Rated • 500+ Happy Customers
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          AC Service & Repair in{" "}
          <span className="text-blue-600">Gurgaon</span>
        </h1>

        {/* Subheading */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
          Same Day AC Service, Gas Filling, Installation & Repair by 
          Experienced Technicians. Fast, Reliable & Affordable.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <a
            href={`tel:+${phoneNumber}`}
            className="primary-btn w-full sm:w-auto text-center"
          >
            📞 Call Now
          </a>

          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            className="whatsapp-btn w-full sm:w-auto text-center"
          >
            💬 WhatsApp Booking
          </a>

        </div>

        {/* Mini Assurance Line */}
        <p className="text-sm text-muted-foreground mt-6">
          ✔ Same Day Visit &nbsp; • &nbsp; ✔ 30-Day Service Warranty &nbsp; • &nbsp; ✔ No Hidden Charges
        </p>
      </div>

    </section>
  );
}