import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function GrowthShowcaseSection() {
  return (
    <section className="relative w-full bg-white py-8 sm:py-10 lg:py-12 overflow-hidden">
      {/* 4 Corner Ambient Gradients */}
      {/* Top-Left: Circular Soft Lime Gradient */}
      <div
        className="absolute -top-28 -left-28 w-80 sm:w-115 h-80 sm:h-115 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(203, 252, 1, 0.45) 0%, rgba(203, 252, 1, 0.16) 53%, rgba(203, 252, 1, 0.04) 75%, rgba(203, 252, 1, 0) 100%)",
        }}
      />

      {/* Top-Right: Warm Light Yellow */}
      <div className="absolute -top-20 -right-20 w-72 sm:w-110 h-72 sm:h-110 bg-[#FEF9C3]/70 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none z-0" />

      {/* Bottom-Left: Vibrant Lime Green */}
      <div className="absolute -bottom-20 -left-20 w-72 sm:w-110 h-72 sm:h-110 bg-[#CCFF00]/30 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none z-0" />

      {/* Bottom-Right: Soft Sky / Lavender Blue */}
      <div className="absolute -bottom-20 -right-20 w-72 sm:w-110 h-72 sm:h-110 bg-[#C7D2FE]/60 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 lg:space-y-10">
        {/* ROW 1: Text Left, Boy Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <h2 className="font-heading font-bold text-slate-950 text-2xl sm:text-3xl lg:text-[40px] leading-[1.18] tracking-tight">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-lg">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            <div className="flex items-center gap-8 sm:gap-12 pt-3 sm:pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue tracking-tight">
                  12K
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                  Students
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue tracking-tight">
                  70+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                  Courses
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue tracking-tight">
                  16
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-normal mt-1">
                  Creators
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px]">
              <Image
                src="/assets/home/boy.png"
                alt="Your Path to Professional Growth Starts Here"
                width={600}
                height={600}
                priority
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* ROW 2: Girl Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex items-center justify-center">
            <div className="relative w-full max-w-[480px] lg:max-w-[520px]">
              <Image
                src="/assets/home/girl.png"
                alt="Create & Manage Courses Easily"
                width={600}
                height={600}
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-3 sm:space-y-4">
            <h2 className="font-heading font-bold text-slate-950 text-2xl sm:text-3xl lg:text-[40px] leading-[1.18] tracking-tight">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-lg">
              <strong className="font-semibold text-slate-900">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            <div className="space-y-2.5 sm:space-y-3 pt-2 sm:pt-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">
                  Share Your Expertise
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">
                  Monetize Your Passion
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">
                  Flexibility and Autonomy
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">
                  Build a Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
