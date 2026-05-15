import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { phoneNumber } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Townairncr Gurgaon",
  description:
    "Contact Townairncr for AC repair, installation, maintenance, and AMC services in Gurgaon. Fast response, expert technicians, and same-day support available.",
  alternates: {
    canonical: "https://www.aircon-engineering.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 pt-24">
      <Header />

      <section className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Hero */}
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 mb-5">
              Contact Townairncr
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Book Trusted AC Services in Gurgaon
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Need urgent AC repair, installation, gas filling, or regular
              servicing? Our expert technicians are available across Gurgaon
              for fast and reliable doorstep service.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-7">
                  <div className="flex gap-5">
                    <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center text-xl">
                      📍
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Service Location
                      </h3>

                      <p className="text-gray-600 mt-1">
                        Gurgaon, Haryana, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center text-xl">
                      📞
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Call Us
                      </h3>

                      <a
                        href={`tel:+${phoneNumber}`}
                        className="text-blue-600 hover:text-blue-700 font-medium mt-1 inline-block"
                      >
                        +{phoneNumber}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center text-xl">
                      📧
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Email Support
                      </h3>

                      <a
                        href="mailto:care@townairncr.com"
                        className="text-blue-600 hover:text-blue-700 mt-1 inline-block"
                      >
                        care@townairncr.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center text-xl">
                      💬
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        WhatsApp Support
                      </h3>

                      <a
                        href={`https://wa.me/${phoneNumber}`}
                        target="_blank"
                        className="text-green-600 hover:text-green-700 font-medium mt-1 inline-block"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Business Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday - Sunday: 8:00 AM - 9:00 PM
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Same-day service available for bookings before 5 PM.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
                <h2 className="text-3xl font-bold leading-tight">
                  Need Immediate AC Service?
                </h2>

                <p className="mt-4 text-blue-100 leading-relaxed">
                  Call us directly for the fastest response. Our technicians
                  are available in multiple Gurgaon sectors for quick support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={`tel:+${phoneNumber}`}
                    className="bg-white text-blue-700 font-semibold px-6 py-4 rounded-2xl text-center hover:bg-gray-100 transition"
                  >
                    Call Now
                  </a>

                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    target="_blank"
                    className="bg-green-500 text-white font-semibold px-6 py-4 rounded-2xl text-center hover:bg-green-600 transition"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Request a Service
                </h2>

                <p className="text-gray-600 mt-3">
                  Fill out the form and our team will contact you shortly.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-gray-200 px-4 py-4 outline-none focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-gray-200 px-4 py-4 outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full rounded-2xl border border-gray-200 px-4 py-4 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </label>

                  <select className="w-full rounded-2xl border border-gray-200 px-4 py-4 outline-none focus:border-blue-500">
                    <option>AC Repair</option>
                    <option>AC Installation</option>
                    <option>AC Gas Filling</option>
                    <option>AC Maintenance</option>
                    <option>AMC Service</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Describe your AC issue or service requirement"
                    className="w-full rounded-2xl border border-gray-200 px-4 py-4 outline-none resize-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition"
                >
                  Submit Request
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by our
                  support team regarding your service request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}