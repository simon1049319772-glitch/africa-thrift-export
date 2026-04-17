import Link from "next/link";
import Image from "next/image";
import { Filter, Grid, List, Package, Zap, X, SlidersHorizontal } from "lucide-react";
import { categories, products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { AnimationWrapper, StaggerContainer } from "@/components/AnimationWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our wide range of quality used clothing. T-Shirts, pants, jackets, shoes, dresses, and wholesale bales for African retailers.",
};

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;
  const categorySlug = params.category as string | undefined;
  
  const filteredProducts = categorySlug 
    ? products.filter(p => p.categorySlug === categorySlug)
    : products;

  const currentCategory = categories.find(c => c.slug === categorySlug);

  return (
    <div className="bg-neutral-bg min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <AnimationWrapper animation="fade-up">
          <div className="mb-10">
            <h1 className="text-4xl font-display font-bold text-neutral-dark mb-3">
              {currentCategory?.name ?? "All Products"}
            </h1>
            <p className="text-neutral-gray flex items-center gap-2">
              <Package className="w-5 h-5" />
              {filteredProducts.length} products available
            </p>
          </div>
        </AnimationWrapper>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 flex-shrink-0">
            <AnimationWrapper animation="fade-left" className="bg-white rounded-2xl shadow-sm p-6 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-light">
                <div className="w-10 h-10 rounded-xl bg-primary-green/10 flex items-center justify-center">
                  <SlidersHorizontal className="w-5 h-5 text-primary-green" />
                </div>
                <h2 className="font-display font-semibold text-lg">Filters</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-sm text-neutral-dark mb-4 flex items-center gap-2">
                    <Package className="w-4 h-4 text-primary-green" />
                    Categories
                  </h3>
                  <nav className="space-y-1.5">
                    <Link
                      href="/products"
                      className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 ${
                        !categorySlug
                          ? "bg-primary-green text-white font-semibold"
                          : "hover:bg-neutral-light text-neutral-dark"
                      }`}
                    >
                      <span>All Products</span>
                      <span className={`text-xs ${!categorySlug ? "text-white/70" : "text-neutral-gray"}`}>
                        ({products.length})
                      </span>
                    </Link>
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/products?category=${cat.slug}`}
                        className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 ${
                          categorySlug === cat.slug
                            ? "bg-primary-green text-white font-semibold"
                            : "hover:bg-neutral-light text-neutral-dark"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className={`text-xs ${categorySlug === cat.slug ? "text-white/70" : "text-neutral-gray"}`}>
                          ({cat.productCount})
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="pt-4 border-t border-neutral-light">
                  <h3 className="font-semibold text-sm text-neutral-dark mb-4">Grade</h3>
                  <div className="space-y-2">
                    {["A", "B", "C"].map((grade) => (
                      <label key={grade} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-neutral-light text-primary-green focus:ring-primary-green transition-colors"
                        />
                        <span className="text-neutral-dark group-hover:text-primary-green transition-colors">
                          Grade {grade}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-light">
                  <h3 className="font-semibold text-sm text-neutral-dark mb-4">Origin</h3>
                  <div className="space-y-2">
                    {["USA", "Europe", "Japan"].map((origin) => (
                      <label key={origin} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-neutral-light text-primary-green focus:ring-primary-green transition-colors"
                        />
                        <span className="text-neutral-dark group-hover:text-primary-green transition-colors">
                          {origin}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </aside>

          <div className="flex-1">
            <AnimationWrapper animation="fade-up" delay={100} className="bg-white rounded-2xl shadow-sm p-5 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-neutral-gray">
                Showing <span className="font-semibold text-neutral-dark">{filteredProducts.length}</span> products
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-neutral-gray text-sm whitespace-nowrap">Sort:</label>
                  <select className="border border-neutral-light rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-green transition-all hover:border-primary-green bg-white">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Popularity</option>
                  </select>
                </div>

                <div className="hidden sm:flex items-center gap-2 border-l border-neutral-light pl-4">
                  <button className="p-2.5 rounded-xl bg-primary-green text-white shadow-md">
                    <Grid className="w-5 h-5" />
                  </button>
                  <button className="p-2.5 rounded-xl hover:bg-neutral-light text-neutral-gray transition-colors">
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </AnimationWrapper>

            {filteredProducts.length === 0 ? (
              <AnimationWrapper animation="fade-up" className="bg-white rounded-2xl shadow-sm p-16 text-center">
                <div className="w-20 h-20 bg-neutral-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-10 h-10 text-neutral-gray" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-neutral-dark mb-3">
                  No products found
                </h3>
                <p className="text-neutral-gray mb-8 max-w-md mx-auto">
                  Try adjusting your filters or browse all products to find what you're looking for.
                </p>
                <Link href="/products" className="btn-secondary">
                  View All Products
                </Link>
              </AnimationWrapper>
            ) : (
              <StaggerContainer staggerDelay={60} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="stagger-item product-card group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        loading="lazy"
                      />
                      <span className="badge badge-gold absolute top-4 left-4 z-10">
                        Grade {product.grade}
                      </span>
                      <span className="absolute top-4 right-4 px-3 py-1.5 bg-secondary-blue/90 backdrop-blur-sm text-white text-xs rounded-lg font-medium">
                        {product.origin}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <span className="btn-primary text-sm">View Details</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-neutral-gray mb-2 flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5" />
                        {product.categoryName}
                      </p>
                      <h3 className="font-semibold text-neutral-dark mb-3 line-clamp-2 leading-snug group-hover:text-primary-green transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-xl font-bold text-primary-green">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-xs text-neutral-gray ml-1">/pc</span>
                        </div>
                        <span className="text-xs text-neutral-gray flex items-center gap-1">
                          <Zap className="w-3.5 h-3.5 text-primary-gold" />
                          MOQ: {product.moq}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-gray">
                        Stock: {product.stock} available
                      </div>
                    </div>
                  </Link>
                ))}
              </StaggerContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
