import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex flex-col justify-between relative overflow-hidden">
      {/* Background Subtle Geometric Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-brand-lime/10 blur-3xl pointer-events-none" />

      {/* Auth Top Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-brand-blue p-1.5 flex items-center justify-center shadow-md">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight">
            bytespace<span className="text-brand-blue">.</span>
          </span>
        </Link>

        <Link
          href="/"
          className="text-xs font-bold text-slate-600 hover:text-brand-blue transition-colors"
        >
          ← Back to website
        </Link>
      </header>

      {/* Main Auth Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 z-10">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Auth Footer */}
      <footer className="w-full text-center py-4 text-xs text-slate-400 z-10">
        © {new Date().getFullYear()} ByteSpace Inc. All rights reserved.
      </footer>
    </div>
  );
}
