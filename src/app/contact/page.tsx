"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">{t("contact.hero_title")}</h1>
          <p className="text-lg opacity-95 max-w-2xl">
            {t("contact.hero_desc")}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-turkmen-green mb-4">{t("contact.showroom_title")}</h2>
              <p className="mb-2"><strong>{t("contact.address_label")}</strong> 40 Garaşsyzlyk şaýoly, Aşgabat 744000, Türkmenistan</p>
              <p className="mb-2"><strong>{t("contact.open_label")}</strong> {t("contact.open_hours")}</p>
              <p className="mb-2"><strong>{t("contact.closed_label")}</strong> {t("contact.closed_days")}</p>
              <p className="mb-2"><strong>{t("contact.phone_label")}</strong> +993 (12) 45 67 89</p>
              <p><strong>{t("contact.email_label")}</strong> hello@heritage-textiles.tm</p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-turkmen-green mb-4">{t("contact.international_title")}</h2>
              <p>
                {t("contact.international_desc")}
              </p>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-turkmen-green mb-4">{t("contact.wholesale_title")}</h2>
              <p>
                {t("contact.wholesale_desc")}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="text-2xl font-bold text-turkmen-green mb-4">{t("contact.arrange_title")}</h2>

            {submitted ? (
              <div className="bg-turkmen-green/10 border border-turkmen-green p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-turkmen-green mb-2">{t("contact.thank_you")}</h3>
                <p>{t("contact.thank_you_msg")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-turkmen-green font-semibold mb-2">
                    {t("contact.name_label")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder={t("contact.name_placeholder")}
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-turkmen-green font-semibold mb-2">
                    {t("contact.email_field_label")}
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
                    {t("contact.interest_label")}
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    required
                    className="input-field"
                  >
                    <option value="">{t("contact.select_option")}</option>
                    <option value="collection">{t("contact.option_collection")}</option>
                    <option value="design">{t("contact.option_design")}</option>
                    <option value="museum">{t("contact.option_museum")}</option>
                    <option value="education">{t("contact.option_education")}</option>
                    <option value="press">{t("contact.option_press")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-turkmen-green font-semibold mb-2">
                    {t("contact.message_label")}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    placeholder={t("contact.message_placeholder")}
                    className="input-field"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  {t("contact.submit")}
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
