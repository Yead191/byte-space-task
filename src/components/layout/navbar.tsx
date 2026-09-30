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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-brand-blue/95 backdrop-blur-md shadow-lg shadow-black/5 py-3.5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
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

          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {mainNavItems?.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/"
                  ? pathname === "/"
                  : item.href === "/creators"
                    ? pathname?.startsWith("/creator")
                    : pathname?.startsWith(item.href));

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

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/login"
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold bg-brand-lime text-slate-950 px-4 py-2 rounded-full hover:bg-[#c6ec1a] active:scale-95 transition-all shadow-xs"
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

          <div className="flex items-center gap-2.5 md:hidden">
            <button
              type="button"
              className="text-white/90 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 active:scale-95 transition-all focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-white/10 bg-brand-blue/95 backdrop-blur-xl ${
          mobileMenuOpen
            ? "max-h-105 opacity-100 border-t mt-3 pt-3 pb-6 shadow-xl"
            : "max-h-0 opacity-0 border-t-0 mt-0 pt-0 pb-0 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex flex-col gap-1.5">
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/"
                  ? pathname === "/"
                  : item.href === "/creators"
                    ? pathname?.startsWith("/creator")
                    : pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white/15 text-white font-semibold shadow-xs"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{item.title}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="h-px bg-white/10 my-3.5" />

          <div className="flex flex-col gap-2 pt-1">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-bold bg-brand-lime text-slate-950 hover:bg-[#c6ec1a] active:scale-[0.99] transition-all shadow-xs"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
