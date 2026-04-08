"use client";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Same Day Service",
      desc: "Quick response and same-day AC repair across Gurgaon.",
    },
    {
      title: "Certified Technicians",
      desc: "Experienced and trained AC mechanics for all major brands.",
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden charges. Clear inspection & service pricing.",
    },
    {
      title: "90 Days Service Warranty",
      desc: "We stand behind our repair work with service assurance.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Why Choose Townairncr?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted AC repair & servicing experts in Gurgaon with fast response and honest pricing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}