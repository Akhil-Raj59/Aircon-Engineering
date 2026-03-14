import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { phoneNumber } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aircon Engineering Gurgaon",
  description: "Need urgent AC repair? Contact Aircon Engineering for fast, reliable, and affordable AC services anywhere in Gurgaon. Available for same-day service.",
  alternates: {
    canonical: "https://www.aircon-engineering.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 bg-gray-50">
      <Header />
      <div className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Need urgent AC repair or looking to schedule a regular service? Get in touch with Aircon Engineering today. Our team is ready to provide fast, reliable, and affordable AC service anywhere in Gurgaon.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Our Location</h3>
                  <p className="text-gray-600">Gurgaon, Haryana, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone Number</h3>
                  <a href={`tel:+${phoneNumber}`} className="text-blue-600 hover:underline font-medium">+{phoneNumber}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">📧</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Address</h3>
                  <a href="mailto:support@airconengineering.in" className="text-blue-600 hover:underline">support@airconengineering.in</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl">💬</div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <a href={`https://wa.me/${phoneNumber}`} className="text-green-600 hover:underline font-medium">Message us on WhatsApp</a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Sunday: 8:00 AM - 9:00 PM</p>
              <p className="text-gray-600 text-sm mt-1">Same-day service available for bookings made before 5 PM.</p>
            </div>
          </div>
          
          {/* Simple Contact Form / CTA */}
          <div className="bg-blue-600 p-8 rounded-2xl shadow-sm text-white flex flex-col justify-center text-center">
             <h2 className="text-3xl font-bold mb-4">Ready to Book?</h2>
             <p className="text-blue-100 mb-8 max-w-sm mx-auto">
               Skip the form and call us directly for the fastest response. We have technicians available in your sector right now.
             </p>
             <a href={`tel:+${phoneNumber}`} className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition transform hover:scale-105 inline-block mx-auto">
               Call +{phoneNumber}
             </a>
             <a href={`https://wa.me/${phoneNumber}`} className="bg-green-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-green-600 transition transform hover:scale-105 inline-block mx-auto mt-4">
               Chat on WhatsApp
             </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
