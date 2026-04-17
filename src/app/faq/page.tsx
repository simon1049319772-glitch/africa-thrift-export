import { HelpCircle, ChevronDown } from "lucide-react";

export const metadata = {
  title: "FAQ - AfriThrift",
  description: "Frequently asked questions about our used clothing wholesale services.",
};

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

export default function FAQPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-gradient-to-r from-primary-green to-secondary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h2 className="text-lg font-semibold text-neutral-dark pr-4">
                      {faq.q}
                    </h2>
                    <ChevronDown className="w-5 h-5 text-neutral-gray group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-neutral-gray">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-secondary-blue text-white rounded-xl p-8 text-center">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-primary-gold" />
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-white/90 mb-6">
              Our team is ready to help with any inquiries about our products and services.
            </p>
            <a
              href="https://wa.me/8613888888888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Contact Us via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
