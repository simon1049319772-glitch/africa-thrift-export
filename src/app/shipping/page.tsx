import Link from "next/link";
import { Truck, Clock, Package, MapPin, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Shipping Information - AfriThrift",
  description: "Learn about our shipping methods, delivery times, and logistics to African countries.",
};

export default function ShippingPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-gradient-to-r from-primary-green to-secondary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-4">Shipping Information</h1>
          <p className="text-xl text-white/90">
            Reliable logistics from China to Africa
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-dark mb-6 flex items-center gap-3">
              <Truck className="w-8 h-8 text-primary-green" />
              Shipping Methods
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-3">Sea Freight (Recommended)</h3>
                <div className="flex items-center gap-2 text-secondary-green mb-4">
                  <Clock className="w-5 h-5" />
                  <span>30-45 days delivery</span>
                </div>
                <ul className="space-y-2 text-neutral-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green mt-1 flex-shrink-0" />
                    <span>Most cost-effective for bulk orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green mt-1 flex-shrink-0" />
                    <span>Ideal for Bales and wholesale orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green mt-1 flex-shrink-0" />
                    <span>Full container load (FCL) or less than container load (LCL)</span>
                  </li>
                </ul>
              </div>

              <div className="border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-dark mb-3">Air Freight</h3>
                <div className="flex items-center gap-2 text-secondary-orange mb-4">
                  <Clock className="w-5 h-5" />
                  <span>7-15 days delivery</span>
                </div>
                <ul className="space-y-2 text-neutral-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green mt-1 flex-shrink-0" />
                    <span>Faster delivery for urgent orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green mt-1 flex-shrink-0" />
                    <span>Higher cost but quicker turnaround</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green mt-1 flex-shrink-0" />
                    <span>Suitable for samples and small orders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-dark mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-primary-green" />
              We Ship To
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Nigeria", "Ghana", "Kenya", "Tanzania",
                "Cameroon", "South Africa", "Uganda", "Zambia",
                "Zimbabwe", "Ethiopia", "Senegal", "Ivory Coast",
                "Mozambique", "Angola", "Democratic Republic of Congo", "Rwanda"
              ].map((country) => (
                <div key={country} className="flex items-center gap-2 p-3 bg-neutral-bg rounded-lg">
                  <Package className="w-5 h-5 text-primary-green" />
                  <span className="text-neutral-dark">{country}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-neutral-gray">
              Contact us if your country is not listed. We may still be able to arrange delivery.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-neutral-dark mb-6">Shipping Process</h2>
            <ol className="space-y-4">
              {[
                { step: 1, title: "Place Order", desc: "Confirm your order and payment terms" },
                { step: 2, title: "Quality Inspection", desc: "We inspect all items before shipping" },
                { step: 3, title: "Packaging", desc: "Secure packaging for international transport" },
                { step: 4, title: "Departure", desc: "Ship from Guangzhou port" },
                { step: 5, title: "Arrival", desc: "Clear customs at destination port" },
                { step: 6, title: "Delivery", desc: "Final delivery to your location" },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark">{item.title}</h3>
                    <p className="text-neutral-gray text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
