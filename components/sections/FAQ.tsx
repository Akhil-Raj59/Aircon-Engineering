"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the cost of AC general service in Gurgaon?",
      answer: "AC general service starts from ₹499 depending on AC type and condition.",
    },
    {
      question: "Do you provide same day AC repair?",
      answer: "Yes, we provide same day AC repair service across Gurgaon.",
    },
    {
      question: "Is there any inspection charge?",
      answer: "Yes, ₹299 inspection charge which is adjusted in final repair bill.",
    },
    {
      question: "Do you provide warranty on repair?",
      answer: "Yes, we provide up to 90 days service warranty.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-sm cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h3 className="font-semibold">{faq.question}</h3>
              {activeIndex === index && (
                <p className="mt-3 text-sm text-muted-foreground">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}