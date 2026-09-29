import React from "react";
import Image from "next/image";

export function HeroShapes() {
  return (
    <>
      <div className="absolute -left-10 sm:-left-8 lg:-left-4 top-16 sm:top-24 w-32 sm:w-48 lg:w-64 z-10 pointer-events-none animate-float-slow">
        <Image
          src="/assets/hero/left-top.svg"
          alt=""
          width={266}
          height={387}
          className="w-full h-auto object-contain drop-shadow-2xl"
          priority
        />
      </div>

      <div className="absolute left-4 sm:left-14 lg:left-24 top-[44%] sm:top-[42%] w-20 sm:w-28 lg:w-36 z-10 pointer-events-none animate-pulse-scale">
        <Image
          src="/assets/hero/left-middle.svg"
          alt=""
          width={177}
          height={176}
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>

      <div className="absolute -left-10 sm:-left-8 lg:left-2 bottom-4 sm:bottom-8 lg:bottom-12 w-40 sm:w-56 lg:w-72 z-10 pointer-events-none animate-float-reverse">
        <Image
          src="/assets/hero/left-bottom.svg"
          alt=""
          width={346}
          height={343}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="absolute -right-8 sm:-right-6 lg:-right-2 top-14 sm:top-20 w-36 sm:w-52 lg:w-64 z-10 pointer-events-none animate-float-slow">
        <svg
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl transform rotate-15"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cylinderBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C4EE15" />
              <stop offset="40%" stopColor="#D4FB20" />
              <stop offset="80%" stopColor="#E2FF4A" />
              <stop offset="100%" stopColor="#A8CE08" />
            </linearGradient>
            <linearGradient
              id="cylinderCap"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#E8FF66" />
              <stop offset="100%" stopColor="#C4EE15" />
            </linearGradient>
          </defs>
          <path
            d="M 30,50 L 30,170 C 30,205 170,205 170,170 L 170,50 Z"
            fill="url(#cylinderBody)"
          />
          <ellipse cx="100" cy="50" rx="70" ry="32" fill="url(#cylinderCap)" />
          <ellipse
            cx="100"
            cy="170"
            rx="70"
            ry="32"
            fill="none"
            stroke="#9DBD08"
            strokeWidth="3"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="absolute right-6 sm:right-16 lg:right-28 top-[42%] sm:top-[40%] w-24 sm:w-36 lg:w-44 z-10 pointer-events-none animate-float-reverse">
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl transform rotate-[-8deg]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pyrFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="pyrSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="pyrBottom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
          </defs>
          <polygon points="80,15 20,125 95,145" fill="url(#pyrFront)" />
          <polygon points="80,15 95,145 150,95" fill="url(#pyrSide)" />
          <polygon
            points="20,125 95,145 150,95"
            fill="url(#pyrBottom)"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="absolute right-2 sm:right-8 lg:right-14 bottom-4.5 sm:bottom-8 lg:bottom-12 w-24 sm:w-36 lg:w-44 z-10 pointer-events-none animate-pulse-scale">
        <div className="transform rotate-90 scale-x-[-1]">
          <Image
            src="/assets/hero/left-middle.svg"
            alt=""
            width={177}
            height={176}
            className="w-full h-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </>
  );
}
