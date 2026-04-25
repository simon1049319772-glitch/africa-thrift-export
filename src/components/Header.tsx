"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Globe, ChevronDown, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Wholesale", href: "/wholesale" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const productCategories = [
  { name: "T-Shirts", href: "/products?category=t-shirts", count: 120 },
  { name: "Pants & Jeans", href: "/products?category=pants", count: 85 },
  { name: "Jackets", href: "/products?category=jackets", count: 45 },
  { name: "Shoes", href: "/products?category=shoes", count: 60 },
  { name: "Dresses", href: "/products?category=dresses", count: 55 },
  { name: "Bales", href: "/products?category=bales", count: 25 },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2"
          : "bg-white/80 backdrop-blur-md py-4"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                "bg-gradient-to-br from-primary-green to-primary-green/90",
                "shadow-lg shadow-primary-green/30",
                "group-hover:scale-105 group-hover:rotate-3",
                "group-hover:shadow-xl group-hover:shadow-primary-green/40"
              )}>
                <span className="text-white font-bold text-xl font-display">A</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl text-neutral-dark tracking-tight transition-colors group-hover:text-primary-green">
                  AfriThrift
                </span>
                <span className="block text-xs text-neutral-gray -mt-1">Premium Quality</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button className="nav-link flex items-center gap-1 text-neutral-dark hover:text-primary-green transition-colors">
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.name && "rotate-180"
                      )} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="nav-link text-neutral-dark hover:text-primary-green transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 pt-3 animate-fade-in-down">
                      <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-neutral-light/50 p-2 min-w-[240px]">
                        <div className="p-2 mb-2 border-b border-neutral-light/50">
                          <p className="text-xs font-semibold text-neutral-gray uppercase tracking-wider">Categories</p>
                        </div>
                        {productCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="flex items-center justify-between px-4 py-3 text-neutral-dark hover:text-primary-green hover:bg-primary-green/5 rounded-xl transition-all duration-200 group"
                          >
                            <span className="font-medium">{category.name}</span>
                            <span className="text-xs text-neutral-gray group-hover:text-primary-green">{category.count} items</span>
                          </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-neutral-light/50">
                          <Link
                            href="/products"
                            className="flex items-center justify-center gap-2 px-4 py-3 text-primary-green font-semibold hover:bg-primary-green/5 rounded-xl transition-all duration-200"
                          >
                            <ShoppingBag className="w-4 h-4" />
                            View All Products
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <button className="flex items-center gap-2 text-sm text-neutral-gray hover:text-primary-green transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-neutral-light/50 flex items-center justify-center group-hover:bg-primary-green/10 transition-colors">
                <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <span className="font-medium">EN</span>
            </button>

            <a
              href="https://wa.me/8613702915479"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get Quote
            </a>
          </div>

          <button
            className="lg:hidden p-3 -m-1 text-neutral-dark hover:text-primary-green transition-colors touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )} 
              />
              <X 
                className={cn(
                  "absolute inset-0 w-6 h-6 transition-all duration-300",
                  mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )} 
              />
            </div>
          </button>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-out",
            mobileMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-neutral-bg rounded-2xl p-4 space-y-2">
            {navigation.map((item, index) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "block min-h-[48px] px-4 py-3 text-neutral-dark hover:text-primary-green",
                    "hover:bg-white rounded-xl transition-all duration-200",
                    "font-medium active:bg-primary-green/5"
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 space-y-1 mt-1">
                    {productCategories.slice(0, 4).map((cat) => (
                      <Link
                        key={cat.name}
                        href={cat.href}
                        className="block min-h-[44px] px-4 py-2.5 text-sm text-neutral-gray hover:text-primary-green hover:bg-white rounded-lg transition-all duration-200 active:bg-primary-green/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-neutral-light mt-4">
              <a
                href="https://wa.me/8613702915479"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center w-full min-h-[52px] text-base"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
