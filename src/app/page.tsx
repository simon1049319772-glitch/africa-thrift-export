import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  Shield,
  CheckCircle,
  DollarSign,
  ArrowRight,
  Star,
} from "lucide-react";
import { categories, getFeaturedProducts } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default async function HomePage() {
  const products = getFeaturedProducts();

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-green via-secondary-blue to-secondary-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-rust rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary-gold/20 text-primary-gold rounded-full text-sm font-medium mb-6">
              🌍 Serving 1000+ African Retailers
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 text-balance">
              Premium Used Clothing for{" "}
              <span className="text-primary-gold">Africa</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Direct sourcing from USA & Europe. Professional quality inspection.
              Reliable sea freight to Nigeria, Ghana, Kenya, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-lg">
                Start Shopping
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/wholesale" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-blue">
                Wholesale Plans
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-primary-gold">10+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-gold">15K+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-gold">50+</div>
                <div className="text-gray-400 text-sm">African Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-bg">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Direct Sourcing",
                desc: "USA & Europe brands",
              },
              {
                icon: Shield,
                title: "Quality Check",
                desc: "3-level inspection",
              },
              {
                icon: Truck,
                title: "Sea Freight",
                desc: "30-45 days delivery",
              },
              {
                icon: CheckCircle,
                title: "Best Prices",
                desc: "Factory direct",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-green" />
                </div>
                <h3 className="font-semibold text-neutral-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle">
            Explore our wide range of quality used clothing
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="group card relative overflow-hidden"
              >
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{category.name}</h3>
                    <p className="text-gray-300 text-sm">
                      {category.productCount} items
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-bg">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="section-title text-left mb-2">
                Featured Products
              </h2>
              <p className="text-neutral-gray">Top picks for African retailers</p>
            </div>
            <Link
              href="/products"
              className="text-primary-green font-semibold flex items-center gap-2 hover:gap-3 transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="card group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-primary-rust text-white text-xs font-medium rounded">
                    Grade {product.grade}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-neutral-gray mb-1">
                    {product.origin} Origin
                  </p>
                  <h3 className="font-medium text-neutral-dark mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary-green">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-xs text-neutral-gray">/pc</span>
                    </div>
                    <span className="text-xs text-neutral-gray">
                      MOQ: {product.moq}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary-green to-secondary-blue text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Wholesale Bales Available
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get the best deals with our wholesale bale packages. Each bale
                contains 45-50kg of carefully selected, graded, and packed used
                clothing ready for your market.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Grade A Premium Selection",
                  "45-50kg per Bale",
                  "Mixed Sizes & Styles",
                  "Factory Direct Prices",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/wholesale" className="btn-primary">
                View Wholesale Options
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                  alt="Wholesale bales"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-gold text-secondary-blue p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">From $120</div>
                <div className="text-sm">per 50kg Bale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="section-title">Why Choose AfriThrift?</h2>
          <p className="section-subtitle">
            Trusted by thousands of retailers across Africa
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Quality Guaranteed",
                desc: "Every item passes our 3-level inspection process before shipping. Grade A/B/C clearly labeled.",
              },
              {
                icon: DollarSign,
                title: "Direct Sourcing",
                desc: "We source directly from USA and Europe, cutting out middlemen for better prices.",
              },
              {
                icon: Shield,
                title: "Expert Support",
                desc: "Our team speaks English, French, and local African languages. WhatsApp support available.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-8">
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-bg">
        <div className="container-custom">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Trusted by retailers across Africa
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Kwame A.",
                location: "Accra, Ghana",
                text: "Best quality used clothes I've sourced. The Grade A bales are excellent for my boutique customers.",
                rating: 5,
              },
              {
                name: "Amina B.",
                location: "Lagos, Nigeria",
                text: "Fast delivery and great communication. I've been ordering for 2 years now. Highly recommend!",
                rating: 5,
              },
              {
                name: "Jean-Pierre M.",
                location: "Douala, Cameroon",
                text: "Professional service and fair prices. The WhatsApp support helps a lot with my broken English.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-primary-gold text-primary-gold"
                    />
                  ))}
                </div>
                <p className="text-neutral-gray mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-neutral-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation. We help you
            choose the right products for your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8613888888888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary-blue">
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
