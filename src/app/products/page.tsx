import Link from "next/link";
import Image from "next/image";
import { Filter, Grid, List, Package, Zap } from "lucide-react";
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
    <div className="bg-neutral-bg min-h-screen">
      <div className="container-custom py-8">
        <AnimationWrapper animation="fade-up" className="mb-8">
          <h1 className="text-3xl font-display font-bold text-neutral-dark mb-2">
            {currentCategory?.name ?? "All Products"}
          </h1>
          <p className="text-neutral-gray flex items-center gap-2">
            <Package className="w-4 h-4" />
            {filteredProducts.length} products available
          </p>
        </AnimationWrapper>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <AnimationWrapper animation="fade-left" className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Filter className="w-5 h-5 text-primary-green" />
                Categories
              </h2>
              <nav className="space-y-2">
                <Link
                  href="/products"
                  className={`block px-3 py-2 rounded-lg transition-all duration-300 flex justify-between items-center group ${
                    !categorySlug
                      ? "bg-primary-green text-white"
                      : "hover:bg-neutral-light text-neutral-dark"
                  }`}
                >
                  <span>All Products</span>
                  {categorySlug === undefined && (
                    <ArrowIcon className="w-4 h-4" />
                  )}
                </Link>
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/products?category=${cat.slug}`}
                    className={`block px-3 py-2 rounded-lg transition-all duration-300 flex justify-between items-center group ${
                      categorySlug === cat.slug
                        ? "bg-primary-green text-white"
                        : "hover:bg-neutral-light text-neutral-dark"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-sm flex items-center gap-1 ${
                      categorySlug === cat.slug ? "text-white/80" : "text-neutral-gray group-hover:text-primary-green"
                    }`}>
                      ({cat.productCount})
                    </span>
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t">
                <h2 className="font-semibold text-lg mb-4">Grade</h2>
                <div className="space-y-2">
                  {["A", "B", "C"].map((grade) => (
                    <label key={grade} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary-green focus:ring-primary-green transition-colors"
                      />
                      <span className="text-neutral-dark group-hover:text-primary-green transition-colors">Grade {grade}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h2 className="font-semibold text-lg mb-4">Origin</h2>
                <div className="space-y-2">
                  {["USA", "Europe", "Japan"].map((origin) => (
                    <label key={origin} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-primary-green focus:ring-primary-green transition-colors"
                      />
                      <span className="text-neutral-dark group-hover:text-primary-green transition-colors">{origin}</span>
                    </label>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          </aside>

          <div className="flex-1">
            <AnimationWrapper animation="fade-up" delay={100} className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-neutral-gray">
                Showing <span className="font-semibold text-neutral-dark">{filteredProducts.length}</span> products
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-gray text-sm">Sort by:</span>
                  <select className="border border-neutral-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-green transition-all hover:border-primary-green">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Popularity</option>
                  </select>
                </div>

                <div className="hidden sm:flex items-center gap-2 border-l pl-4">
                  <button className="p-2 rounded-lg bg-primary-green text-white shadow-md">
                    <Grid className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-neutral-light text-neutral-gray transition-colors">
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </AnimationWrapper>

            {filteredProducts.length === 0 ? (
              <AnimationWrapper animation="fade-up" className="bg-white rounded-xl shadow-sm p-12 text-center">
                <div className="w-16 h-16 bg-neutral-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Grid className="w-8 h-8 text-neutral-gray" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  No products found
                </h3>
                <p className="text-neutral-gray mb-4">
                  Try adjusting your filters or browse all products
                </p>
                <Link href="/products" className="btn-secondary">
                  View All Products
                </Link>
              </AnimationWrapper>
            ) : (
              <StaggerContainer staggerDelay={80} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="stagger-item card-interactive group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-t-xl">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="card-image object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        loading="lazy"
                      />
                      <span className="badge badge-primary absolute top-3 left-3 opacity-90 group-hover:scale-105 transition-transform">
                        Grade {product.grade}
                      </span>
                      <span className="absolute top-3 right-3 px-2 py-1 bg-secondary-blue/90 backdrop-blur-sm text-white text-xs rounded flex items-center gap-1">
                        {product.origin}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="btn-primary text-sm">View Details</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-neutral-gray mb-1 flex items-center gap-1">
                        <Package className="w-3 h-3" />
                        {product.categoryName}
                      </p>
                      <h3 className="font-medium text-neutral-dark mb-2 line-clamp-2 min-h-[3rem] group-hover:text-primary-green transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="text-lg font-bold text-primary-green">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-xs text-neutral-gray">/pc</span>
                        </div>
                        <span className="text-xs text-neutral-gray flex items-center gap-1">
                          <Zap className="w-3 h-3 text-primary-gold" />
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

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
