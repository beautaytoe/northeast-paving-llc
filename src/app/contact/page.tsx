import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Contact Us — Paving Contractor in SE Connecticut",
  description:
    "Contact Northeast Paving LLC for asphalt paving, sealcoating, and site work in Southeastern CT. Call 860-447-1518 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbNav items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      {/* Hero */}
      <section className="bg-charcoal text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
            Contact <span className="text-orange">Us</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Have a question or ready to get started? Reach out by phone, visit
            our office, or fill out the form below.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-charcoal mb-6">
                Send Us a Message
              </h2>
              <ContactForm variant="contact" />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-charcoal mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <a
                      href="tel:860-447-1518"
                      className="text-orange hover:text-orange-dark transition-colors font-bold text-lg"
                    >
                      860-447-1518
                    </a>
                    <p className="text-sm text-gray-warm mt-0.5">
                      Fax: 860-447-1535
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-warm">
                      419 Montauk Avenue
                      <br />
                      New London, CT 06320
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Hours</h3>
                    <p className="text-gray-warm text-sm">
                      Monday – Friday: 7:00 AM – 5:00 PM
                      <br />
                      Saturday: By appointment
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <div className="mt-8 p-5 bg-gray-light rounded-lg">
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-charcoal mb-3">
                  Credentials
                </h3>
                <ul className="text-sm text-gray-warm space-y-2">
                  <li>CT Dept. of Consumer Protection Reg. #571106</li>
                  <li>State of CT Certified W.B.E.</li>
                  <li>Fully Licensed & Insured</li>
                  <li>30+ Years of Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-charcoal mb-6 text-center">
            Find Us
          </h2>
          {/* TODO: Replace with actual Google Maps embed */}
          <div className="w-full h-80 bg-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-warm">
              <MapPin className="w-10 h-10 mx-auto mb-2 text-orange" />
              <p className="font-semibold">419 Montauk Avenue</p>
              <p>New London, CT 06320</p>
              <p className="text-sm mt-2 text-gray-400">
                Google Maps embed will be placed here
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
