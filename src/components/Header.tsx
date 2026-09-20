"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import { ShoppingCart, Store, ImageIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary-700">
            <Store className="w-7 h-7" />
            <span>MyStore</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-600 hover:text-primary-600 font-medium transition">
              Shop
            </Link>
            <Link href="/products" className="text-slate-600 hover:text-primary-600 font-medium transition">
              All Products
            </Link>
            <Link href="/image-generator" className="flex items-center gap-1.5 text-slate-600 hover:text-primary-600 font-medium transition">
              <ImageIcon className="w-4 h-4" />
              Free AI Images
            </Link>
            <Link href="/about" className="text-slate-600 hover:text-primary-600 font-medium transition">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-slate-600 hover:text-primary-600 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-slate-100 pt-3 space-y-2">
            <Link href="/" className="block px-3 py-2 rounded-lg hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <Link href="/products" className="block px-3 py-2 rounded-lg hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              All Products
            </Link>
            <Link href="/image-generator" className="block px-3 py-2 rounded-lg hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              Free AI Images
            </Link>
            <Link href="/about" className="block px-3 py-2 rounded-lg hover:bg-slate-100" onClick={() => setMobileOpen(false)}>
              About
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
