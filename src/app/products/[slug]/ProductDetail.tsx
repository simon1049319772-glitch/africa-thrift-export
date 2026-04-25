"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Minus, Plus, Heart, Share2, Truck, Shield, CheckCircle, Phone } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/lib/data";

interface ProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetail({ product, relatedProducts }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(product.moq);
  const [activeTab, setActiveTab] = useState("details");

  const increaseQty = () => setQuantity(q => q + 1);
  const decreaseQty = () => setQuantity(q => Math.max(product.moq, q - 1));

  return (
    <div className="bg-neutral-bg min-h-screen">
      <div className="container-custom py-6 sm:py-8">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-neutral-gray mb-4 sm:mb-6 overflow-x-auto">
            <Link href="/" className="hover:text-primary-green whitespace-nowrap">Home</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link href="/products" className="hover:text-primary-green whitespace-nowrap">Products</Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <Link href={`/products?category=${product.categorySlug}`} className="hover:text-primary-green whitespace-nowrap">
              {product.categoryName}
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-neutral-dark whitespace-nowrap">{product.name}</span>
          </nav>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8 sm:mb-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-8">
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors touch-manipulation ${
                        selectedImage === idx ? "border-primary-green" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - Image ${idx + 1}`}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-neutral-gray mb-1">{product.categoryName}</p>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-neutral-dark mb-2">
                      {product.name}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                      <span className="px-3 py-1 bg-primary-rust text-white text-sm rounded-full">
                        Grade {product.grade}
                      </span>
                      <span className="px-3 py-1 bg-secondary-blue text-white text-sm rounded-full">
                        {product.origin} Origin
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1 sm:gap-2">
                    <button className="p-2.5 sm:p-2 rounded-lg border border-neutral-light hover:bg-neutral-light transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <Heart className="w-5 h-5 text-neutral-gray" />
                    </button>
                    <button className="p-2.5 sm:p-2 rounded-lg border border-neutral-light hover:bg-neutral-light transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-neutral-gray" />
                    </button>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl sm:text-4xl font-bold text-primary-green">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-base sm:text-lg text-neutral-gray">/ piece</span>
                  </div>
                  <p className="text-sm text-neutral-gray">
                    MOQ: {product.moq} pieces | Weight: {product.weight}kg/pc
                  </p>
                </div>

              <div className="border-t border-b border-neutral-light py-4 sm:py-6 mb-4 sm:mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary-green/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-secondary-green" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-dark">In Stock</p>
                      <p className="text-sm text-neutral-gray">{product.stock} pieces</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <p className="font-medium text-neutral-dark">Sea Freight</p>
                      <p className="text-sm text-neutral-gray">30-45 days</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-medium text-neutral-dark">Quantity:</span>
                  <div className="flex items-center border border-neutral-light rounded-lg">
                    <button
                      onClick={decreaseQty}
                      className="p-3 min-w-[44px] min-h-[44px] hover:bg-neutral-light transition-colors touch-manipulation"
                      disabled={quantity <= product.moq}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(product.moq, parseInt(e.target.value) || product.moq))}
                      className="w-16 sm:w-20 text-center border-x border-neutral-light py-2 min-h-[44px]"
                      min={product.moq}
                    />
                    <button
                      onClick={increaseQty}
                      className="p-3 min-w-[44px] min-h-[44px] hover:bg-neutral-light transition-colors touch-manipulation"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <a
                  href="https://wa.me/8613888888888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Inquire via WhatsApp
                </a>
                <button className="btn-secondary w-full justify-center text-lg">
                  Request Quote
                </button>
              </div>

              <div className="bg-neutral-bg rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-primary-green" />
                  <span className="font-medium text-neutral-dark">Wholesale Benefits</span>
                </div>
                <ul className="space-y-2 text-sm text-neutral-gray">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Bulk discounts available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Free quality inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-green" />
                    Flexible payment terms for regular customers
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t">
            <div className="flex border-b">
              {["details", "specs", "shipping"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? "text-primary-green border-b-2 border-primary-green"
                      : "text-neutral-gray hover:text-neutral-dark"
                  }`}
                >
                  {tab === "details" ? "Product Details" : tab === "specs" ? "Specifications" : "Shipping Info"}
                </button>
              ))}
            </div>
            <div className="p-8">
              {activeTab === "details" && (
                <div className="prose max-w-none">
                  <p className="text-neutral-gray leading-relaxed whitespace-pre-line">
                    {product.description}
                  </p>
                </div>
              )}
              {activeTab === "specs" && (
                <table className="w-full">
                  <tbody>
                    {[
                      ["Product Name", product.name],
                      ["SKU", product.slug],
                      ["Grade", product.grade],
                      ["Origin", product.origin],
                      ["MOQ", `${product.moq} pieces`],
                      ["Weight", product.weight ? `${product.weight} kg/piece` : "N/A"],
                      ["Stock", `${product.stock} pieces`],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-b border-neutral-light">
                        <td className="py-3 text-neutral-gray w-1/3">{label}</td>
                        <td className="py-3 text-neutral-dark font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === "shipping" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-2">Shipping Methods</h3>
                    <ul className="space-y-2 text-neutral-gray">
                      <li>Sea Freight: 30-45 days (Recommended for bulk orders)</li>
                      <li>Air Freight: 7-15 days (Higher cost, faster delivery)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-dark mb-2">Delivery Destinations</h3>
                    <p className="text-neutral-gray">
                      We ship to all major African countries including Nigeria, Ghana, Kenya, 
                      Tanzania, Cameroon, South Africa, and more.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-display font-bold text-neutral-dark mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="card group"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 px-2 py-1 bg-primary-rust text-white text-xs rounded">
                      Grade {item.grade}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-neutral-dark mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-primary-green">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
