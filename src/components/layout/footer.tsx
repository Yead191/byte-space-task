"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="w-full bg-white text-slate-700 pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center mb-5">
                <Image
                  src="/footer-full-logo.png"
                  alt="ByteSpace"
                  width={171}
                  height={37}
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </Link>

              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed max-w-sm mb-6">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            {/* Newsletter Form */}
            <div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-700 text-xs sm:text-[13px] font-medium bg-emerald-50 border border-emerald-200 p-3 rounded-2xl max-w-md">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center gap-3 max-w-md"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 max-w-[280px] bg-white border border-slate-300 text-slate-800 placeholder:text-slate-400 text-xs sm:text-[13px] rounded-full px-5 py-2.5 sm:py-3 focus:outline-none focus:border-slate-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-brand-lime text-slate-950 font-medium hover:bg-[#c6ec1a] active:scale-95 rounded-full px-7 py-2.5 sm:py-3 text-xs sm:text-[13px] transition-all cursor-pointer shrink-0"
                  >
                    Search
                  </button>
                </form>
              )}

              <p className="text-[11px] text-slate-500 mt-3 leading-normal max-w-sm">
                By subscribing, you agree to our{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-slate-700"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Navigation Links Matching Figma Screenshot */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3.5 sm:space-y-4">
                <li>
                  <Link
                    href="/courses"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Business"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=IT"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    IT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Design"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3.5 sm:space-y-4">
                <li>
                  <Link
                    href="/courses?category=Development"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Marketing"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Photography"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Finance"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Sport"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 sm:col-span-1">
              <ul className="space-y-3.5 sm:space-y-4">
                <li>
                  <Link
                    href="/creators"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliate"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-xs sm:text-[13px] text-slate-600 hover:text-slate-950 transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Divider Line + Copyright & Legal */}
        <div className="border-t border-slate-200 mt-14 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/privacy"
              className="hover:text-slate-800 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-800 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="hover:text-slate-800 transition-colors"
            >
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
