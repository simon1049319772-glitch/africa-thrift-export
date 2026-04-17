import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Users, Award, Truck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AfriThrift - your trusted partner for premium used clothing export to Africa with 10+ years of experience.",
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="relative bg-gradient-to-br from-primary-green via-secondary-blue to-secondary-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-rust rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About AfriThrift
            </h1>
            <p className="text-xl text-white/90">
              Your trusted partner for premium used clothing export to Africa. 
              We connect quality sourcing with reliable logistics to serve retailers across the continent.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-neutral-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-gray">
                <p>
                  Founded in 2014, AfriThrift started with a simple mission: to provide 
                  African retailers with access to high-quality used clothing at fair prices.
                </p>
                <p>
                  Based in Guangzhou, China, we leverage our strategic location near major 
                  textile sourcing hubs to curate the best selection of used clothing from 
                  the USA and Europe.
                </p>
                <p>
                  Over the past 10 years, we have served over 15,000 retailers across 
                  50+ African countries, earning a reputation for reliability, quality, 
                  and exceptional customer service.
                </p>
                <p>
                  Our team speaks English, French, and local African languages, ensuring 
                  smooth communication with our diverse customer base.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                alt="Our warehouse"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-primary-green">10+</div>
                <div className="text-sm text-neutral-gray">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Our Numbers</h2>
          <p className="section-subtitle">
            Key statistics that define our business
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years in Business" },
              { number: "15K+", label: "Happy Customers" },
              { number: "50+", label: "Countries Served" },
              { number: "50M+", label: "Pieces Delivered" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-primary-green mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" id="quality">
        <div className="container-custom">
          <h2 className="section-title">Quality Control Process</h2>
          <p className="section-subtitle">
            Every piece of clothing goes through rigorous inspection
          </p>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              {
                step: 1,
                title: "Sourcing",
                desc: "Direct collection from USA & Europe",
                icon: "📦",
              },
              {
                step: 2,
                title: "Arrival",
                desc: "Import to Guangzhou warehouse",
                icon: "🏭",
              },
              {
                step: 3,
                title: "Sorting",
                desc: "Categorization by type & size",
                icon: "🔄",
              },
              {
                step: 4,
                title: "Inspection",
                desc: "3-level quality check",
                icon: "✓",
              },
              {
                step: 5,
                title: "Grading",
                desc: "Grade A/B/C classification",
                icon: "🏷️",
              },
              {
                step: 6,
                title: "Packing",
                desc: "Secure packaging for shipping",
                icon: "📦",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-neutral-dark mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-gray">{item.desc}</p>
                {i < 5 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary-green/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Quality First",
                desc: "We never compromise on quality. Every item is inspected before it reaches you.",
              },
              {
                icon: Users,
                title: "Customer Focus",
                desc: "Our customers are our priority. We provide personalized service and support.",
              },
              {
                icon: Award,
                title: "Transparency",
                desc: "Clear pricing, honest descriptions, and no hidden fees. What you see is what you get.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-neutral-bg rounded-xl p-8">
                <div className="w-14 h-14 bg-primary-green/10 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-gray">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-green to-secondary-blue rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful retailers who trust AfriThrift for their 
              used clothing supply. Let us help you grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/products" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-blue">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
