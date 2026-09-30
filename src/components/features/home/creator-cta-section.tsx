import React from "react";
import Image from "next/image";
import Link from "next/link";

export function CreatorCtaSection() {
  return (
    <section className="relative w-full bg-brand-blue overflow-hidden py-20 sm:py-24 lg:py-28">
      {/* 96px Grid Background */}
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

      {/* Decorative 3D Shapes */}
      {/* Top Left: Lime 3D Spiral */}
      <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-10 w-28 sm:w-44 md:w-56 pointer-events-none select-none z-10">
        <Image
          src="/assets/home/icons/left-2.svg"
          alt=""
          width={267}
          height={225}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Top Left Inner: White Wavy Ribbon */}
      <div className="absolute top-3 sm:top-5 left-[19%] sm:left-[22%] md:left-[25%] w-18 sm:w-26 md:w-36 pointer-events-none select-none z-10">
        <Image
          src="/assets/home/icons/left-1.svg"
          alt=""
          width={176}
          height={176}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Left Far: White Cone */}
      <div className="absolute bottom-6 sm:bottom-8 -left-3 sm:-left-4 w-18 sm:w-26 md:w-32 pointer-events-none select-none z-10">
        <Image
          src="/assets/home/icons/left-3.svg"
          alt=""
          width={139}
          height={189}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Left: Lime Donut / Torus Loop */}
      <div className="absolute -bottom-8 sm:-bottom-12 left-[3%] sm:left-[5%] md:left-[7%] w-36 sm:w-56 md:w-72 pointer-events-none select-none z-10">
        <Image
          src="/assets/home/icons/left-4.svg"
          alt=""
          width={344}
          height={190}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Top Right Inner: Yellow Pyramid */}
      <div className="absolute top-3 sm:top-5 right-[18%] sm:right-[22%] md:right-[24%] w-20 sm:w-30 md:w-40 pointer-events-none select-none z-10">
        <Image
          src="/assets/home/icons/right-1.svg"
          alt=""
          width={189}
          height={189}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Top Right Far: White Cylinder */}
      <div className="absolute -top-4 sm:-top-6 -right-5 sm:-right-8 w-32 sm:w-48 md:w-60 pointer-events-none select-none z-10">
        <Image
          src="/assets/home/icons/right-2.svg"
          alt=""
          width={218}
          height={372}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Right: Lime Spring */}
      <div className="absolute -bottom-8 sm:-bottom-12 -right-4 sm:-right-8 w-36 sm:w-56 md:w-72 pointer-events-none select-none z-10">
        <Image
          src="/assets/home/icons/right-3.svg"
          alt=""
          width={332}
          height={199}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] tracking-tight leading-[1.18]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto mt-4 sm:mt-5 mb-7 sm:mb-8">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/creators"
          className="bg-brand-lime text-slate-950 hover:bg-[#c6ec1a] active:scale-95 font-bold text-xs sm:text-sm px-7 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer inline-flex items-center justify-center"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
