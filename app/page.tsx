import Link from "next/link";

export const metadata = {
  title: "AC Repair in Gurgaon | Same Day Service | Aircon Engineering",
  description:
    "Affordable AC repair services in Gurgaon. 90-minute service guarantee. Call now for fast AC installation, gas filling and AMC plans.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AC Repair in Gurgaon
        </h1>
        <p className="text-lg md:text-xl mb-8">
          90 Minute Service | Starting at ₹299 | Trusted Local Engineers
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="tel:+918860186269"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/918860186269"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-lg font-semibold"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our AC Services in Gurgaon
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">AC Repair</h3>
            <p>Complete diagnostics and repair for split and window AC.</p>
            <p className="mt-3 font-semibold">Starting ₹299</p>
          </div>

          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">AC Gas Filling</h3>
            <p>Leak detection and gas refill service at your doorstep.</p>
            <p className="mt-3 font-semibold">Starting ₹1,499</p>
          </div>

          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">AC Installation</h3>
            <p>Professional AC installation with safety assurance.</p>
            <p className="mt-3 font-semibold">Starting ₹999</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Aircon Engineering?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Same Day Service</h4>
              <p>Quick response across Gurgaon.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Verified Engineers</h4>
              <p>Experienced and background-checked technicians.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Service Warranty</h4>
              <p>Up to 30 days service warranty on repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Need AC Service in Gurgaon?
        </h2>

        <a
          href="tel:+8860186269"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold"
        >
          Call Now & Book Service
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© {new Date().getFullYear()} Aircon Engineering | Gurgaon</p>
      </footer>
    </main>
  );
}