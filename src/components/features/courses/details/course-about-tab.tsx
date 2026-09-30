import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { CourseDetail } from "@/types";

interface CourseAboutTabProps {
  course: CourseDetail;
}

export function CourseAboutTab({ course }: CourseAboutTabProps) {
  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in-up">
      <div>
        <h3 className="font-heading font-semibold text-slate-900 text-xl sm:text-2xl mb-4">
          Description
        </h3>
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {course.descriptionParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading font-semibold text-slate-900 text-lg sm:text-xl mb-4">
          Sneak Peak
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
          {course.sneakPeeks.map((item) => (
            <div
              key={item.id}
              className="relative aspect-4/3 rounded-2xl sm:rounded-[20px] overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading font-semibold text-slate-900 text-lg sm:text-xl mb-4">
          Key Points
        </h3>
        <div className="space-y-3">
          {course.keyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-xs">
                <Check className="w-3 h-3 stroke-3" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
