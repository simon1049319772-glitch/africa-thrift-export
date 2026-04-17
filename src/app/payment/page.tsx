import { CreditCard, Building, Globe, Shield, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Payment Methods - AfriThrift",
  description: "Learn about our secure payment methods for international transactions.",
};

export default function PaymentPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-gradient-to-r from-primary-green to-secondary-blue text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-display font-bold mb-4">Payment Methods</h1>
          <p className="text-xl text-white/90">
            Secure and flexible payment options for international trade
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-dark mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-primary-green" />
              Bank Transfer (T/T)
            </h2>
            <p className="text-neutral-gray mb-6">
              The most common and recommended payment method for international wholesale transactions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-neutral-dark">30-50% deposit</span> upon order confirmation
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-medium text-neutral-dark">Balance payment</span> before shipment
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-green mt-0.5 flex-shrink-0" />
                <span>Bank fees shared between sender and receiver</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-neutral-dark mb-4 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary-green" />
                PayPal
              </h2>
              <ul className="space-y-2 text-neutral-gray">
                <li>Suitable for orders under $5,000</li>
                <li>Additional 5% transaction fee applies</li>
                <li>Fast and secure</li>
                <li>Buyer protection included</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-xl font-bold text-neutral-dark mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary-green" />
                Western Union
              </h2>
              <ul className="space-y-2 text-neutral-gray">
                <li>Available for small orders</li>
                <li>Quick processing time</li>
                <li>100% upfront payment required</li>
                <li>Valid ID required</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-neutral-dark mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary-green" />
              Payment Security
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-secondary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-dark mb-1">Secure Transactions</h3>
                  <p className="text-neutral-gray text-sm">
                    All payments are processed through secure channels with encryption.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-secondary-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-dark mb-1">Verified Suppliers</h3>
                  <p className="text-neutral-gray text-sm">
                    We verify all transactions to ensure security for both parties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
