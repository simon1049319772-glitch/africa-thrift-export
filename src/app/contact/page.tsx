"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, User, Building, Globe } from "lucide-react";
import { AnimationWrapper } from "@/components/AnimationWrapper";

const countries = [
  "Nigeria", "Ghana", "Kenya", "Tanzania", "Cameroon", "South Africa",
  "Uganda", "Zambia", "Zimbabwe", "Ethiopia", "Senegal", "Ivory Coast",
  "Other"
];

const quantities = [
  "Less than 100 pieces",
  "100-500 pieces",
  "500-1000 pieces",
  "1000-5000 pieces",
  "More than 5000 pieces"
];

const productOptions = [
  "T-Shirts",
  "Pants & Jeans",
  "Jackets & Coats",
  "Shoes",
  "Dresses",
  "Bales (Wholesale)"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    products: [] as string[],
    quantity: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleProductChange = (product: string) => {
    setFormData(prev => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter(p => p !== product)
        : [...prev.products, product]
    }));
  };

  if (submitted) {
    return (
      <div className="bg-neutral-bg min-h-screen pt-28 pb-16">
        <div className="container-custom">
          <AnimationWrapper animation="fade-up" className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="w-20 h-20 bg-secondary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-secondary-green" />
              </div>
              <h2 className="text-3xl font-display font-bold text-neutral-dark mb-4">
                Thank You!
              </h2>
              <p className="text-neutral-gray text-lg mb-10 leading-relaxed">
                Your inquiry has been submitted successfully. Our sales team will contact you within 24 hours via WhatsApp or email.
              </p>
              <a
                href="https://wa.me/8613888888888"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with Us Now
              </a>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-bg min-h-screen pt-28 pb-16">
      <div className="container-custom">
        <AnimationWrapper animation="fade-up" className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-dark mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto leading-relaxed">
            Get in touch with our sales team for product inquiries, wholesale pricing, or any questions about our services.
          </p>
        </AnimationWrapper>

        <div className="grid lg:grid-cols-3 gap-10">
          <AnimationWrapper animation="fade-left" className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold text-neutral-dark mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-green/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary-green" />
                </div>
                Send Us an Inquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-3">
                      Name <span className="text-primary-rust">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field pl-12"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-3">
                      Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="input-field pl-12"
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-3">
                      Email <span className="text-primary-rust">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field pl-12"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-3">
                      WhatsApp / Phone <span className="text-primary-rust">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field pl-12"
                        placeholder="+123 456 7890"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-3">
                      Country <span className="text-primary-rust">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray z-10" />
                      <select
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="input-field pl-12 appearance-none"
                      >
                        <option value="">Select country</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-dark mb-3">
                      Expected Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="input-field"
                    >
                      <option value="">Select quantity range</option>
                      {quantities.map(q => (
                        <option key={q} value={q}>{q}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-4">
                    Products Interested In
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {productOptions.map(product => (
                      <label
                        key={product}
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                          formData.products.includes(product)
                            ? "border-primary-green bg-primary-green/5"
                            : "border-neutral-light hover:border-primary-green/50 hover:bg-neutral-light/30"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.products.includes(product)}
                          onChange={() => handleProductChange(product)}
                          className="w-5 h-5 rounded border-neutral-light text-primary-green focus:ring-primary-green"
                        />
                        <span className="text-sm font-medium">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-dark mb-3">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center text-lg py-5"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="fade-right" delay={100} className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-display font-bold text-xl text-neutral-dark mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/8613888888888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-secondary-green/10 rounded-xl hover:bg-secondary-green/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary-green flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">WhatsApp</p>
                    <p className="text-sm text-neutral-gray">+86 138 8888 8888</p>
                  </div>
                </a>
                <a
                  href="tel:+8613888888888"
                  className="flex items-center gap-4 p-4 bg-primary-green/10 rounded-xl hover:bg-primary-green/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-green flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Phone</p>
                    <p className="text-sm text-neutral-gray">+86 138 8888 8888</p>
                  </div>
                </a>
                <a
                  href="mailto:info@afrithrift.com"
                  className="flex items-center gap-4 p-4 bg-secondary-blue/10 rounded-xl hover:bg-secondary-blue/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary-blue flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark">Email</p>
                    <p className="text-sm text-neutral-gray">info@afrithrift.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-display font-bold text-xl text-neutral-dark mb-6">Office Info</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-rust/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-rust" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark mb-1">Address</p>
                    <p className="text-neutral-gray">Guangzhou, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-dark mb-1">Business Hours</p>
                    <p className="text-neutral-gray">Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)</p>
                    <p className="text-neutral-gray">Sat: 9:00 AM - 2:00 PM (GMT+8)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-green to-secondary-blue rounded-2xl shadow-lg p-8 text-white">
              <h3 className="font-display font-bold text-xl mb-5">Why Contact Us?</h3>
              <ul className="space-y-4">
                {[
                  "Response within 24 hours",
                  "Free product consultation",
                  "Sample photos available",
                  "Customized wholesale plans"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}
