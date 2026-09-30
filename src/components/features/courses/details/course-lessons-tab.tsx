import React from "react";
import { Video } from "lucide-react";
import { CourseDetail } from "@/types";

interface CourseLessonsTabProps {
  course: CourseDetail;
}

export function CourseLessonsTab({ course }: CourseLessonsTabProps) {
  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in-up">
      <div>
        <h3 className="font-heading font-semibold text-slate-900 text-xl sm:text-2xl mb-3">
          Explore the Modules
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Immerse yourself in the course content as we break down each module
          into comprehensive lessons, providing practical insights and hands-on
          experiences.
        </p>
      </div>

      <div>
        <h4 className="font-heading font-semibold text-slate-900 text-base sm:text-lg mb-5">
          Lesson List
        </h4>

        <div className="space-y-4">
          {course.modules.map((mod) => (
            <div
              key={mod.id}
              className="flex items-start gap-4 p-3.5 sm:p-4 rounded-2xl hover:bg-slate-50/80 transition-colors group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-brand-lime flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform duration-200">
                <Video className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 stroke-2" />
              </div>

              <div className="flex-1 min-w-0">
                <h5 className="font-heading font-semibold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-brand-blue transition-colors">
                  {mod.title}
                </h5>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-heading font-semibold text-slate-900 text-base sm:text-lg mb-2.5">
          Lesson Content
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          Engage with each lesson through captivating video content, detailed
          textual explanations, and interactive elements. Download resources,
          complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      <div>
        <h4 className="font-heading font-semibold text-slate-900 text-base sm:text-lg mb-2.5">
          Lesson Progress Tracking
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl mb-5">
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning journey.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs max-w-xl">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Learning Progress
          </span>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3.5">
            {course.progressPercentage}%
          </div>
          <div className="w-full h-2.5 sm:h-3 bg-[#E4E4E7] rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-lime rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${course.progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
