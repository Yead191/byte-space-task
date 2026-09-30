import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-brand-blue relative overflow-x-hidden overflow-y-auto flex flex-col justify-center py-10 sm:py-14 lg:py-16">
      {/* 96px Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
      />

      {/* Top Left Favicon Logo */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 lg:top-10 lg:left-14 z-20">
        <Link
          href="/"
          className="inline-flex items-center transition-transform hover:scale-105 active:scale-95"
          aria-label="Back to home"
        >
          <Image
            src="/favicon.ico"
            alt="ByteSpace"
            width={40}
            height={40}
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
        </Link>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
