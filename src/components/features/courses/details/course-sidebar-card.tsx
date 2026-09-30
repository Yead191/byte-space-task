import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Video, Award, Users } from "lucide-react";
import { CourseDetail } from "@/types";

interface CourseSidebarCardProps {
  course: CourseDetail;
}

export function CourseSidebarCard({ course }: CourseSidebarCardProps) {
  const avatarSrc = course.instructorAvatar || "/assets/course/Ellipse.png";

  return (
    <div className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-7 xl:p-8 shadow-xl border border-slate-100 flex flex-col gap-4 sm:gap-5 w-full">
      <div>
        <h3 className="font-heading font-semibold text-slate-900 text-base sm:text-lg 2xl:text-xl">
          {course.lessonsCount} Lessons ({course.totalDuration})
        </h3>

        <div className="mt-3.5 space-y-2.5">
          {course.previewLessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-start justify-between text-xs sm:text-sm py-0.5 group gap-2"
            >
              <div className="flex items-start gap-2.5 min-w-0 pr-2">
                <span className="text-slate-900 font-normal w-5 shrink-0 pt-0.5">
                  {lesson.order}
                </span>
                <span className="text-slate-900 font-normal leading-snug">
                  {lesson.title}
                </span>
              </div>
              <span className="text-brand-blue font-normal shrink-0 text-right pt-0.5">
                {lesson.duration}
              </span>
            </div>
          ))}
          <p className="text-xs text-slate-500 font-normal pt-1">
            {course.remainingVideosCount} more videos
          </p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <div className="flex items-baseline gap-1.5 pt-0.5">
        <span className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
          ${course.price}
        </span>
        <span className="text-slate-500 text-xs sm:text-sm font-medium">
          /{course.period || "lifetime"}
        </span>
      </div>

      <button
        type="button"
        className="w-full bg-brand-lime text-slate-950 hover:bg-[#c6ec1a] active:scale-[0.99] font-bold text-sm sm:text-base py-3 sm:py-3.5 px-5 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
      >
        Enroll Now
      </button>

      <div className="pt-1">
        <h4 className="font-heading font-semibold text-slate-900 text-sm sm:text-base mb-3">
          This course include
        </h4>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <FileText className="w-4.5 h-4.5 text-brand-blue shrink-0 stroke-2" />
            <span>Learning Resources</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <Video className="w-4.5 h-4.5 text-brand-blue shrink-0 stroke-2" />
            <span>Quality Lesson Videos</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <Award className="w-4.5 h-4.5 text-brand-blue shrink-0 stroke-2" />
            <span>Certificate of Completion</span>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
            <Users className="w-4.5 h-4.5 text-brand-blue shrink-0 stroke-2" />
            <span>Private Consultation</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-100 bg-slate-100">
            <Image
              src={avatarSrc}
              alt={course.instructor}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h5 className="font-heading font-semibold text-slate-900 text-sm sm:text-base leading-tight">
              PurePearl Studio
            </h5>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {course.instructorRole}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link
          href="#profile"
          className="inline-flex items-center justify-center border border-slate-300 text-slate-800 hover:bg-slate-50 active:scale-95 text-xs font-semibold py-2 px-5 rounded-full transition-all duration-200 w-fit cursor-pointer"
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
}
