import React from "react";
import Link from "next/link";
import { Laptop, Building2, Megaphone, Camera } from "lucide-react";

interface CategoryPath {
  title: string;
  categoryQuery: string;
  icon: React.ReactNode;
}

const LEARNING_PATHS: CategoryPath[] = [
  {
    title: "Design",
    categoryQuery: "UI/UX Design",
    icon: (
      <svg
        className="w-6 h-6 text-slate-950"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m14 7 3 3" />
        <path d="M7 17l-4 1 1-4 9.5-9.5a2.12 2.12 0 1 1 3 3L7 17Z" />
        <path d="m14.5 12.5 3 3" />
        <path d="m11.5 15.5 3 3" />
      </svg>
    ),
  },
  {
    title: "Development",
    categoryQuery: "Web Development",
    icon: (
      <svg
        className="w-6 h-6 text-slate-950"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="20" x="5" y="2" rx="3" />
        <path d="m10 9-2 3 2 3" />
        <path d="m14 9 2 3-2 3" />
      </svg>
    ),
  },
  {
    title: "IT & Software",
    categoryQuery: "Data Science",
    icon: <Laptop className="w-6 h-6 text-slate-950 stroke-[2.2]" />,
  },
  {
    title: "Business",
    categoryQuery: "Freelance & Entrepreneurship",
    icon: <Building2 className="w-6 h-6 text-slate-950 stroke-[2.2]" />,
  },
  {
    title: "Marketing",
    categoryQuery: "Marketing",
    icon: <Megaphone className="w-6 h-6 text-slate-950 stroke-[2.2]" />,
  },
  {
    title: "Photography",
    categoryQuery: "Photography",
    icon: <Camera className="w-6 h-6 text-slate-950 stroke-[2.2]" />,
  },
];

export function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-heading font-bold text-slate-950 text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed mt-3 sm:mt-4">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 md:gap-5">
          {LEARNING_PATHS.map((item) => (
            <Link
              key={item.title}
              href={`/courses?category=${encodeURIComponent(item.categoryQuery)}`}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-6 flex flex-col items-center justify-center gap-3.5 sm:gap-4 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 group cursor-pointer aspect-square"
            >
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-lime flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200 shrink-0">
                {item.icon}
              </div>

              <span className="text-slate-900 font-semibold text-xs sm:text-sm text-center leading-snug group-hover:text-brand-blue transition-colors">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
