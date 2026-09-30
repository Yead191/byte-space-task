"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CreatorProfile } from "@/data/creator-profile";

interface CreatorHeroProps {
  creator: CreatorProfile;
}

export function CreatorHero({ creator }: CreatorHeroProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(creator.followersCount);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers((prev) => Math.max(0, prev - 1));
    } else {
      setIsFollowing(true);
      setFollowers((prev) => prev + 1);
    }
  };

  return (
    <section className="relative z-20 w-full bg-brand-blue pt-24 sm:pt-28 lg:pt-30 pb-8 sm:pb-10 lg:pb-12">
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

      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-137.5 h-137.5 bg-white/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="">
          <div className="flex items-center gap-4 sm:gap-5 mb-5 sm:mb-6">
            <div className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-2xl sm:rounded-3xl overflow-hidden shrink-0 border border-white/20 bg-white/10 shadow-lg">
              <Image
                src={creator.avatar || "/assets/creator/creator-dp.png"}
                alt={creator.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <h1 className="font-heading font-semibold text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
                  {creator.name}
                </h1>
                <span className="bg-brand-lime text-slate-950 font-bold text-xs px-3.5 py-1 rounded-full shadow-xs">
                  {creator.badge}
                </span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm font-medium mt-1">
                {creator.role}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 text-white/85 text-xs sm:text-sm font-normal leading-relaxed mb-6 sm:mb-7 max-w-4xl">
            {creator.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="bg-white text-slate-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-xs flex items-center gap-1.5">
                <span className="font-bold text-slate-950">
                  {creator.productsCount}
                </span>
                <span className="text-slate-600">Products</span>
              </div>

              <div className="bg-white text-slate-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-xs flex items-center gap-1.5">
                <span className="font-bold text-slate-950">{followers}</span>
                <span className="text-slate-600">Followers</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFollowToggle}
              className={`px-6 sm:px-7 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm active:scale-95 ${
                isFollowing
                  ? "bg-white text-slate-900 hover:bg-slate-100"
                  : "bg-brand-lime text-slate-950 hover:bg-[#c6ec1a]"
              }`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
