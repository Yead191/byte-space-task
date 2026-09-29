"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#003BE2]/95 backdrop-blur-md shadow-lg shadow-black/10 py-3"
          : "bg-[#003BE2] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-sans">
              bytespace<span className="text-brand-lime">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-lime rounded-full animate-scale-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white font-semibold cursor-pointer"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button
                variant="default"
                className="bg-brand-lime text-slate-950 hover:bg-[#c3ea15] font-bold px-6 shadow-md shadow-brand-lime/20 cursor-pointer"
              >
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (CSS Transition) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-white/10 bg-[#003BE2] shadow-xl ${
          mobileMenuOpen
            ? "max-h-[420px] opacity-100 border-t mt-3 pt-4 pb-6 px-4"
            : "max-h-0 opacity-0 border-t-0 mt-0 pt-0 pb-0 px-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-3">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                pathname === item.href
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}

          <div className="h-px bg-white/10 my-2" />

          <div className="flex flex-col gap-2.5 pt-1">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full justify-center bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="default"
                className="w-full justify-center bg-brand-lime text-slate-950 font-bold hover:bg-[#c3ea15]"
              >
                Sign Up Now <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

