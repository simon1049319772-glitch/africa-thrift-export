"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";

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
      <div className="bg-neutral-bg min-h-screen py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-16 h-16 bg-secondary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-secondary-green" />
            </div>
            <h2 className="text-2xl font-display font-bold text-neutral-dark mb-4">
              Thank You!
            </h2>
            <p className="text-neutral-gray mb-8">
              Your inquiry has been submitted successfully. Our sales team will contact you 
              within 24 hours via WhatsApp or email.
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
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-bg min-h-screen">
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-dark mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
              Get in touch with our sales team for product inquiries, wholesale pricing, 
              or any questions about our services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-xl font-semibold text-neutral-dark mb-6">
                  Send Us an Inquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Name <span className="text-primary-rust">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                        placeholder="Company name (optional)"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Email <span className="text-primary-rust">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        WhatsApp / Phone <span className="text-primary-rust">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                        placeholder="+123 456 7890"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Country <span className="text-primary-rust">*</span>
                      </label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                      >
                        <option value="">Select country</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Expected Quantity
                      </label>
                      <select
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                      >
                        <option value="">Select quantity range</option>
                        {quantities.map(q => (
                          <option key={q} value={q}>{q}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-3">
                      Products Interested In
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {productOptions.map(product => (
                        <label
                          key={product}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                            formData.products.includes(product)
                              ? "border-primary-green bg-primary-green/5"
                              : "border-neutral-light hover:border-primary-green/50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.products.includes(product)}
                            onChange={() => handleProductChange(product)}
                            className="w-4 h-4 rounded border-gray-300 text-primary-green focus:ring-primary-green"
                          />
                          <span className="text-sm">{product}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-lg"
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
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-neutral-dark mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/8613888888888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-secondary-green/10 rounded-lg hover:bg-secondary-green/20 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6 text-secondary-green" />
                    <div>
                      <p className="font-medium text-neutral-dark">WhatsApp</p>
                      <p className="text-sm text-neutral-gray">+86 138 8888 8888</p>
                    </div>
                  </a>
                  <a
                    href="tel:+8613888888888"
                    className="flex items-center gap-3 p-3 bg-primary-green/10 rounded-lg hover:bg-primary-green/20 transition-colors"
                  >
                    <Phone className="w-6 h-6 text-primary-green" />
                    <div>
                      <p className="font-medium text-neutral-dark">Phone</p>
                      <p className="text-sm text-neutral-gray">+86 138 8888 8888</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@afrithrift.com"
                    className="flex items-center gap-3 p-3 bg-secondary-blue/10 rounded-lg hover:bg-secondary-blue/20 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-secondary-blue" />
                    <div>
                      <p className="font-medium text-neutral-dark">Email</p>
                      <p className="text-sm text-neutral-gray">info@afrithrift.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-semibold text-neutral-dark mb-4">Office Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-rust mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-dark">Address</p>
                      <p className="text-sm text-neutral-gray">
                        Guangzhou, China
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-rust mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-dark">Business Hours</p>
                      <p className="text-sm text-neutral-gray">
                        Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)
                      </p>
                      <p className="text-sm text-neutral-gray">
                        Sat: 9:00 AM - 2:00 PM (GMT+8)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-green to-secondary-blue rounded-xl shadow-sm p-6 text-white">
                <h3 className="font-semibold mb-3">Why Contact Us?</h3>
                <ul className="space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Free product consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Sample photos available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Customized wholesale plans
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
