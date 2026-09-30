"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const LOGOS = [
  {
    id: "logo-1",
    src: "/assets/home/logos/logo1.png",
    alt: "Company Partner 1",
    width: 167,
    height: 41,
  },
  {
    id: "logo-2",
    src: "/assets/home/logos/logo2.png",
    alt: "Company Partner 2",
    width: 168,
    height: 41,
  },
  {
    id: "logo-3",
    src: "/assets/home/logos/logo3.png",
    alt: "Company Partner 3",
    width: 170,
    height: 41,
  },
  {
    id: "logo-4",
    src: "/assets/home/logos/logo4.png",
    alt: "Company Partner 4",
    width: 170,
    height: 41,
  },
];

export function TrustedLogos() {
  return (
    <section
      aria-label="Trusted Partners"
      className="w-full bg-[#F8F9FA] border-y border-slate-100/80 py-8 sm:py-10 overflow-hidden select-none"
    >
      <div className="relative w-full mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee
          speed={40}
          pauseOnHover={true}
          autoFill={true}
          className="flex items-center overflow-hidden"
        >
          {LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="mx-8 sm:mx-12 md:mx-16 flex items-center justify-center shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
