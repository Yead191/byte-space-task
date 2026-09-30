"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"facebook" | "google" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      toast.error("Missing credentials", {
        description: "Please enter both your email address and password to sign in.",
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
      toast.error("Password too short", {
        description: "Password must be at least 6 characters.",
      });
      return;
    }

    setLoading(true);

    try {
      // Simulate authentication request
      await new Promise((resolve) => setTimeout(resolve, 800));

      const userName = email.split("@")[0].replace(/[._-]/g, " ");
      const formattedName = userName.charAt(0).toUpperCase() + userName.slice(1);

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "bytespace_user",
          JSON.stringify({
            name: formattedName,
            email,
            avatar: "/assets/creator/creator-dp.png",
            loggedInAt: new Date().toISOString(),
          })
        );
      }

      toast.success("Welcome back!", {
        description: `Successfully signed in as ${email}. Redirecting...`,
      });

      setTimeout(() => {
        router.push("/courses");
      }, 1000);
    } catch {
      toast.error("Sign in failed", {
        description: "An unexpected error occurred. Please try again.",
      });
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "facebook" | "google") => {
    setSocialLoading(provider);
    toast.info(`Connecting to ${provider === "google" ? "Google" : "Facebook"}...`, {
      description: "Authenticating your profile.",
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "bytespace_user",
        JSON.stringify({
          name: provider === "google" ? "Google User" : "Facebook User",
          email: `${provider}.user@bytespace.com`,
          avatar: "/assets/creator/creator-dp.png",
          provider,
          loggedInAt: new Date().toISOString(),
        })
      );
    }

    toast.success(`${provider === "google" ? "Google" : "Facebook"} sign-in successful!`, {
      description: "Welcome to ByteSpace. Redirecting...",
    });

    setTimeout(() => {
      router.push("/courses");
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      {/* Left Column: Heading, Subtitle & 3D Cards Illustration */}
      <div className="lg:col-span-6 flex flex-col items-start">
        <h1 className="font-heading font-bold text-white text-2xl sm:text-3xl lg:text-[34px] leading-tight mb-3">
          Sign in with ease
        </h1>

        <p className="text-white/85 text-xs sm:text-sm font-normal leading-relaxed max-w-md mb-6 sm:mb-8">
          Experience a seamless and efficient sign-in process that grants you
          instant access to a world of knowledge.
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
            Sign In
          </span>

          <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-[36px] tracking-tight leading-tight mb-8">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit}>
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
            <div className="flex justify-end mb-8">
              <button
                type="submit"
                disabled={loading}
                className="bg-brand-lime text-slate-950 font-semibold hover:bg-[#c6ec1a] active:scale-95 rounded-full px-8 py-2.5 sm:py-3 text-xs sm:text-sm transition-all shadow-xs cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Signing In...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center mb-8">
            <div className="grow border-t border-slate-200" />
            <span className="shrink mx-4 text-xs sm:text-[13px] text-slate-400 font-normal">
              or
            </span>
            <div className="grow border-t border-slate-200" />
          </div>

          {/* Social Sign In (Facebook & Google) */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              type="button"
              disabled={socialLoading !== null}
              onClick={() => handleSocialLogin("facebook")}
              className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              aria-label="Sign in with Facebook"
            >
              {socialLoading === "facebook" ? (
                <Loader2 className="w-5 h-5 animate-spin text-slate-700" />
              ) : (
                <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              disabled={socialLoading !== null}
              onClick={() => handleSocialLogin("google")}
              className="w-12 h-12 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
              aria-label="Sign in with Google"
            >
              {socialLoading === "google" ? (
                <Loader2 className="w-5 h-5 animate-spin text-slate-700" />
              ) : (
                <svg className="w-5 h-5 fill-slate-900" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              )}
            </button>
          </div>

          {/* Switch to Register */}
          <p className="text-center text-xs sm:text-[13px] text-slate-500">
            New user?{" "}
            <Link
              href="/register"
              className="text-brand-blue hover:underline font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
