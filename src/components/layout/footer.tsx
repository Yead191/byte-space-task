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
    <footer className="w-full bg-white text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-100">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="ByteSpace"
                  width={142}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
              </Link>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                Stay up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            {/* Newsletter Form */}
            <div>
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-700 text-xs sm:text-sm font-semibold bg-emerald-50 border border-emerald-200 p-3 rounded-2xl">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex items-center gap-2 max-w-md"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white border border-slate-200 text-slate-900  text-xs sm:text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-lime"
                  />
                  <button
                    type="submit"
                    className="bg-brand-lime text-slate-950 font-bold hover:bg-[#c3ea15] rounded-full px-6 py-2.5 text-xs sm:text-sm transition-all shadow-xs cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-[11px] text-slate-400 mt-3 leading-normal max-w-sm">
                By subscribing, you agree to our{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-slate-600"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Navigation Links Matching Screenshot */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/courses"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Business"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=IT"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    IT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Design"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/courses?category=Development"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Marketing"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Photography"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Photography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Finance"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Sport"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 sm:col-span-1">
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/creators"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliate"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="text-xs sm:text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    More
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
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
