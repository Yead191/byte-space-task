"use client";

import React, { useState } from "react";
import { Share2, Check } from "lucide-react";

export function CourseHeroShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        if (navigator.share) {
          try {
            await navigator.share({
              title: "Build Digital Asset: A Comprehensive Guide",
              url: window.location.href,
            });
            return;
          } catch {
            // Fallback to clipboard if share was cancelled or unsupported
          }
        }
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <button
      onClick={handleShare}
      type="button"
      className="inline-flex items-center gap-2 bg-brand-lime text-slate-950 hover:bg-[#c6ec1a] active:scale-95 transition-all duration-200 font-semibold px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-xs cursor-pointer select-none"
      aria-label="Share this course"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 stroke-[2.5]" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4 stroke-[2.2]" />
          <span>Share</span>
        </>
      )}
    </button>
  );
}
