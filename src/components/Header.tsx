"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Wholesale", href: "/wholesale" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const productCategories = [
  { name: "T-Shirts", href: "/products?category=t-shirts" },
  { name: "Pants & Jeans", href: "/products?category=pants" },
  { name: "Jackets", href: "/products?category=jackets" },
  { name: "Shoes", href: "/products?category=shoes" },
  { name: "Bales", href: "/products?category=bales" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
        "bg-white sticky top-0 z-50 transition-all duration-500 ease-smooth",
        isScrolled
          ? "shadow-lg shadow-black/5 backdrop-blur-lg bg-white/95"
          : "shadow-sm"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary-green rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary-green/30">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-xl text-primary-green transition-colors duration-300 group-hover:text-secondary-blue">
                AfriThrift
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      className="nav-link flex items-center gap-1 text-neutral-dark hover:text-primary-green font-medium transition-colors duration-300"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        activeDropdown === item.name && "rotate-180"
                      )} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="nav-link text-neutral-dark hover:text-primary-green font-medium transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  )}

                  {item.hasDropdown && activeDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 pt-2 animate-fade-in-down"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-neutral-light/50 p-4 min-w-[200px] animate-scale-in">
                        <div className="space-y-1">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className="block px-4 py-2 text-neutral-dark hover:text-primary-green hover:bg-primary-green/5 rounded-lg transition-all duration-200"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-neutral-gray hover:text-primary-green transition-colors duration-300 group">
              <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>EN</span>
            </button>

            <a
              href="https://wa.me/8613888888888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce transition-transform" />
              Get Quote
            </a>
          </div>

          <button
            className="md:hidden p-2 text-neutral-dark hover:text-primary-green transition-colors duration-300"
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
            "md:hidden overflow-hidden transition-all duration-500 ease-smooth",
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t space-y-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="mobile-menu-item"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t mt-4">
              <a
                href="https://wa.me/8613888888888"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center w-full"
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
