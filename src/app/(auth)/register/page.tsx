"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      toast.error("Missing information", {
        description: "Please complete all fields to create your account.",
      });
      return;
    }

    if (fullName.trim().length < 2) {
      toast.error("Invalid name", {
        description: "Please enter your full name (at least 2 characters).",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format", {
        description: "Please provide a valid email address (e.g. name@example.com).",
      });
      return;
    }

    if (password.length < 6) {
      toast.error("Weak password", {
        description: "Password must be at least 6 characters long.",
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate registration request
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "bytespace_user",
          JSON.stringify({
            name: fullName.trim(),
            email,
            avatar: "/assets/creator/creator-dp.png",
            registeredAt: new Date().toISOString(),
          })
        );
      }

      toast.success("Account created successfully!", {
        description: `Welcome to ByteSpace, ${fullName.trim()}! Redirecting to courses...`,
      });

      setTimeout(() => {
        router.push("/courses");
      }, 1000);
    } catch {
      toast.error("Registration failed", {
        description: "Something went wrong. Please try again.",
      });
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      {/* Left Column: Heading, Subtitle & 3D Cards Illustration */}
      <div className="lg:col-span-6 flex flex-col items-start">
        <h1 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-[34px] leading-tight mb-3">
          Sign up and come in
        </h1>

        <p className="text-white/85 text-xs sm:text-sm font-normal leading-relaxed max-w-md mb-6 sm:mb-8">
          The registration process is straightforward, uncomplicated, and
          efficient, allowing users to sign up quickly, easily, and at no cost
        </p>

        <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]">
          <Image
            src="/assets/auth/auth.png"
            alt="ByteSpace Learning Platform"
            width={1655}
            height={1757}
            priority
            className="w-full h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Right Column: White Floating Auth Card */}
      <div className="lg:col-span-6 flex justify-center lg:justify-end">
        <div className="bg-white rounded-[32px] sm:rounded-[36px] p-8 sm:p-10 lg:p-12 shadow-2xl w-full max-w-[480px]">
          <span className="text-brand-blue font-medium text-xs sm:text-sm block mb-1">
            Create an Account
          </span>

          <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-[36px] tracking-tight leading-tight mb-8">
            Welcome to <br />
            ByteSpace
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div className="space-y-1.5 mb-5">
              <label className="text-xs sm:text-[13px] font-medium text-slate-700 block">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jamie Davis"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
                required
                className="w-full bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all disabled:opacity-60"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-1.5 mb-5">
              <label className="text-xs sm:text-[13px] font-medium text-slate-700 block">
                Email
              </label>
              <input
                type="email"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                className="w-full bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all disabled:opacity-60"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5 mb-6">
              <label className="text-xs sm:text-[13px] font-medium text-slate-700 block">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
                className="w-full bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 text-xs sm:text-sm rounded-xl sm:rounded-2xl px-4 py-3 sm:py-3.5 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all disabled:opacity-60"
              />
            </div>

            {/* Submit Button (Right-aligned pill) */}
            <div className="flex justify-end mb-8 sm:mb-12">
              <button
                type="submit"
                disabled={loading}
                className="bg-brand-lime text-slate-950 font-semibold hover:bg-[#c6ec1a] active:scale-95 rounded-full px-8 py-2.5 sm:py-3 text-xs sm:text-sm transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <span>Continue</span>
                )}
              </button>
            </div>
          </form>

          {/* Switch to Login */}
          <p className="text-center text-xs sm:text-[13px] text-slate-500 mt-4 sm:mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-brand-blue hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
