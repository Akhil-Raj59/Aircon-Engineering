"use client";

import { useState } from "react";
import { serviceCategories, phoneNumber } from "@/lib/constants";

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  return (
    <section className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        {/* <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">
            Professional AC Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Trusted Technicians.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Same-day service • No hidden charges • 30-day service warranty
          </p>
        </div> */}

        {/* Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id}>

              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-primary pl-4">
                {category.title}
              </h3>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {category.cards.map((card) => {
                  const isOpen = expandedCard === card.id;

                  return (
                    <div
                      key={card.id}
                      className="bg-white rounded-xl border shadow-sm hover:shadow-md transition"
                    >
                      <div className="p-6">

                        {/* Title + Price */}
                        <div className="flex justify-between items-start gap-6">
                          <div>
                            <h4 className="text-xl font-semibold">
                              {card.title}
                            </h4>
                            <p className="text-muted-foreground mt-2 text-sm">
                              {card.description}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">
                              Starting at
                            </p>
                            <p className="text-2xl font-bold text-primary">
                              ₹{card.startingPrice}
                            </p>
                          </div>
                        </div>

                        {/* Sub Services Preview */}
                        <div className="mt-6 space-y-2">
                          {card.subServices.map((sub) => (
                            <div
                              key={sub.id}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-muted-foreground">
                                {sub.name}
                              </span>
                              <span className="font-medium">
                                ₹{sub.price}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Expand Toggle */}
                        <button
                          onClick={() =>
                            setExpandedCard(isOpen ? null : card.id)
                          }
                          className="mt-6 text-sm font-medium text-primary"
                        >
                          {isOpen ? "Hide Details" : "View Full Details"}
                        </button>

                        {/* Expandable Section */}
                        {isOpen && (
                          <div className="mt-6 pt-6 border-t grid md:grid-cols-2 gap-6 text-sm">

                            {/* Includes */}
                            <div>
                              <h5 className="font-semibold mb-3 text-green-600">
                                What's Included
                              </h5>
                              <ul className="space-y-2 text-muted-foreground">
                                {card.details.includes.map((item, i) => (
                                  <li key={i}>• {item}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Excludes */}
                            <div>
                              <h5 className="font-semibold mb-3 text-red-500">
                                Not Included
                              </h5>
                              <ul className="space-y-2 text-muted-foreground">
                                {card.details.excludes.map((item, i) => (
                                  <li key={i}>• {item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* CTA */}
                        <div className="mt-8 flex gap-4">
                          <a
                            href={`tel:+${phoneNumber}`}
                            className="primary-btn flex-1 text-center"
                          >
                            Book Now
                          </a>

                          <a
                            href={`https://wa.me/${phoneNumber}`}
                            target="_blank"
                            className="whatsapp-btn flex-1 text-center"
                          >
                            WhatsApp
                          </a>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}