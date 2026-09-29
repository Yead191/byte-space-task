"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/config/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-blue/90 backdrop-blur-md shadow-lg shadow-black/5 py-3.5"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Just the logo image itself, no extra text or bg container */}
          <Link
            href="/"
            className="inline-flex items-center transition-transform hover:opacity-95"
          >
            <Image
              src="/logo.png"
              alt="ByteSpace"
              width={142}
              height={36}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-normal transition-colors duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/85 hover:text-white font-medium"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions (Sign In, Join Us, Cart) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Join Us
            </Link>
            <button
              type="button"
              className="text-white/90 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              className="text-white p-1 rounded-full"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (CSS Transition) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-white/10 bg-brand-blue shadow-xl ${
          mobileMenuOpen
            ? "max-h-[360px] opacity-100 border-t mt-3 pt-4 pb-6 px-4"
            : "max-h-0 opacity-0 border-t-0 mt-0 pt-0 pb-0 px-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2.5">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-white/15 text-white font-semibold"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}

          <div className="h-px bg-white/10 my-2" />

          <div className="flex items-center justify-between px-4 pt-1">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white/90 hover:text-white"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold bg-brand-lime text-slate-950 px-4 py-2 rounded-full hover:bg-[#c3ea15]"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
