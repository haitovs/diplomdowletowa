"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", interest: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-desert-sand">
      <Header />

      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">Visit the Dowletowa Atelier</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            Plan your journey to our Ashgabat showroom, schedule a design consultation, or inquire about collections. Our hospitality is rooted in Turkmen warmth—çay is always ready.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-turkmen-green mb-4">Showroom Hours</h2>
              <p className="mb-2"><strong>Address:</strong> 40 Garaşsyzlyk şaýoly, Ashgabat 744000, Turkmenistan</p>
              <p className="mb-2"><strong>Open:</strong> Monday – Saturday, 09:00 – 18:00 TMT</p>
              <p className="mb-2"><strong>Closed:</strong> Sundays & national holidays</p>
              <p className="mb-2"><strong>Phone:</strong> +993 (12) 45 67 89</p>
              <p><strong>Email:</strong> hello@dowletowa-textiles.tm</p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-turkmen-green mb-4">International Clients</h2>
              <p>
                We offer video consultations for collectors, designers, and curators abroad. Textile samples can be shipped worldwide with certification of origin, conservation guidelines, and digital catalogues.
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-turkmen-green mb-4">Cultural Immersion</h2>
              <p>
                Our hospitality coordinators tailor itineraries around weaving demonstrations, dye workshops, and archival tours. Private salons can be reserved for unveiling ceremonies, press briefings, or diplomatic delegations.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold text-turkmen-green mb-4">Arrange a Visit</h2>
            
            {submitted ? (
              <div className="bg-turkmen-green/10 border border-turkmen-green p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-turkmen-green mb-2">Thank you!</h3>
                <p>Your message has been received. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-turkmen-green font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your name"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-turkmen-green font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="you@example.com"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-turkmen-green font-semibold mb-2">
                    Primary Interest
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    required
                    className="input-field"
                  >
                    <option value="">Select an option</option>
                    <option value="collection">Private Collection Acquisition</option>
                    <option value="design">Interior/Design Consultation</option>
                    <option value="museum">Museum Loan or Exhibition</option>
                    <option value="education">Educational Visit</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-turkmen-green font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry"
                    className="input-field"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
