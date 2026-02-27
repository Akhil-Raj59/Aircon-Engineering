"use client";

export default function Reviews() {
  const reviews = [
    {
      name: "Rahul Mehta",
      text: "Very professional AC service. Technician arrived on time and fixed cooling issue quickly.",
    },
    {
      name: "Priya Sharma",
      text: "Affordable pricing and honest service. Highly recommended for AC repair in Gurgaon.",
    },
    {
      name: "Amit Verma",
      text: "Same day service and clear explanation of issue. Will definitely call again.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground">
            Trusted by hundreds of satisfied customers in Gurgaon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-sm text-muted-foreground mb-4">
                "{review.text}"
              </p>
              <h4 className="font-semibold">{review.name}</h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}