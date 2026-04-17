"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle, Plus, Minus } from "lucide-react";
import { AnimationWrapper, StaggerContainer } from "@/components/AnimationWrapper";

const faqs = [
  {
    q: "What is the minimum order quantity?",
    a: "MOQ varies by product type. For individual items, MOQ is typically 25-50 pieces. For Bales, MOQ starts at 5 bales (225-250kg). Contact us for specific requirements."
  },
  {
    q: "How do you ensure quality?",
    a: "All items go through a 3-level quality inspection process: 1) Initial sorting, 2) Detailed inspection, 3) Final grading before packaging. We offer Grade A, B, and C classifications."
  },
  {
    q: "What are the payment terms?",
    a: "We accept T/T bank transfer (30-50% deposit, balance before shipment), PayPal (for orders under $5,000), and Western Union. Contact us to discuss payment options."
  },
  {
    q: "How long does shipping take?",
    a: "Sea freight takes 30-45 days from Guangzhou to African ports. Air freight is 7-15 days but at higher cost. Delivery to final destination depends on your location."
  },
  {
    q: "Do you offer samples?",
    a: "Yes, we can send sample boxes (5-10kg) at cost price plus shipping. This helps you verify quality before placing bulk orders."
  },
  {
    q: "What countries do you ship to?",
    a: "We ship to all major African countries including Nigeria, Ghana, Kenya, Tanzania, Cameroon, South Africa, Uganda, Zambia, Zimbabwe, and more."
  },
  {
    q: "Can I customize Bale contents?",
    a: "Yes, we offer custom Bale options where you can specify item types, sizes, or brands. Contact us for custom packaging services."
  },
  {
    q: "What if items are damaged during shipping?",
    a: "We pack all items securely and work with reliable logistics partners. In rare cases of damage, we have a claims process. Grade A items have less than 3% defect rate."
  },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-neutral-dark pr-6">{faq.q}</h2>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-primary-green text-white' : 'bg-neutral-light text-neutral-gray'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 pt-0 text-neutral-gray leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="relative bg-gradient-to-r from-primary-green via-secondary-blue to-primary-green text-white pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-pattern" />
        </div>
        <div className="container-custom relative">
          <AnimationWrapper animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h1>
          </AnimationWrapper>
          <AnimationWrapper animation="fade-up" delay={100}>
            <p className="text-xl text-white/80">Find answers to common questions about our services</p>
          </AnimationWrapper>
        </div>
      </section>

      <section className="py-16 -mt-16 relative">
        <div className="container-custom max-w-4xl">
          <StaggerContainer staggerDelay={80} className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="stagger-item">
                <FAQItem faq={faq} />
              </div>
            ))}
          </StaggerContainer>

          <AnimationWrapper animation="fade-up" className="mt-16 bg-gradient-to-r from-primary-green via-secondary-blue to-primary-green rounded-2xl p-10 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-pattern" />
            </div>
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-primary-gold" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-4">Still have questions?</h2>
              <p className="text-white/80 mb-8 max-w-md mx-auto">
                Our team is ready to help with any inquiries about our products and services.
              </p>
              <a
                href="https://wa.me/8613888888888"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us via WhatsApp
              </a>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
}
