import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24 bg-gray-50">
      <Header />
      <div className="flex-grow max-w-4xl mx-auto px-6 py-12 bg-white mt-8 rounded-2xl shadow-sm border border-gray-100 mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed text-sm lg:text-base">
          <p>
            Welcome to Aircon Engineering! These terms and conditions outline the rules and regulations for the use of our website and services, located in Gurgaon, Haryana.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing this website and booking our AC repair/service, we assume you accept these terms and conditions. Do not continue to use Aircon Engineering if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Service Booking and Delivery</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We offer AC repair, gas charging, installation, and cleaning services exclusively within Gurgaon and its surrounding sectors.</li>
            <li>Our "Same-Day Service" is subject to technician availability and the time of booking. Bookings made after 5:00 PM may be scheduled for the next day.</li>
            <li>We reserve the right to refuse service if the location is unsafe or outside our standard service areas.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Pricing and Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>A standard inspection charge is applicable if the technician visits and diagnoses the issue, but you opt not to proceed with the repair.</li>
            <li>All prices listed on the website are estimated starting prices. The final quote will be provided on-site after a physical inspection of the AC unit.</li>
            <li>Payment is required immediately upon completion of the service. We accept UPI, Cash, and Card payments.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. 30-Day Service Warranty</h2>
          <p>
            We provide a 30-day warranty on all our repair and service labour. If the exact same issue reoccurs within 30 days of the service date, we will fix it at no additional labour cost. Does not cover new parts if required later.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. While we guarantee our service quality, Aircon Engineering is not liable for existing hardware failures or manufacturing defects in your AC unit.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
