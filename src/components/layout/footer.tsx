"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { footerNavItems } from "@/config/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

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
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800">
          {/* Left Column: Branding & Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-white/10 p-1 flex items-center justify-center">
                  <Image
                    src={siteConfig.logo}
                    alt={siteConfig.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-black text-white tracking-tight">
                  bytespace<span className="text-brand-lime">.</span>
                </span>
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                ByteSpace is an online learning platform dedicated to providing quality education, skills building, and professional growth for learners worldwide.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-2">
              <h4 className="text-sm font-bold text-white mb-2">
                Subscribe to our newsletter
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                Get the latest course releases and industry insights sent straight to your inbox.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-950/50 border border-emerald-800/50 p-3 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you for subscribing! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 rounded-xl focus:border-brand-blue"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    className="bg-brand-lime text-slate-950 font-bold hover:bg-[#c3ea15] rounded-xl px-5 shrink-0"
                  >
                    Subscribe <Send size={14} />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right Columns: Nav Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {footerNavItems.quickLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-brand-lime transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: About Us */}
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                About Us
              </h3>
              <ul className="space-y-2.5">
                {footerNavItems.aboutUs.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-brand-lime transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-2.5">
                {footerNavItems.resources.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-sm text-slate-400 hover:text-brand-lime transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-300 transition-colors">
              Cookie Settings
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.65 1.65 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
