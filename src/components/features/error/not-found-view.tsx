import Link from "next/link";

export function NotFoundView() {
  return (
    <section className="relative w-full bg-brand-blue min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] xl:h-screen lg:max-h-screen flex items-center justify-center pt-20 sm:pt-24 lg:pt-16 xl:pt-20 pb-10 sm:pb-12 lg:pb-8 xl:pb-12 px-4 text-center overflow-hidden">
      {/* 96px grid layout background matching screenshot */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center justify-center my-auto">
        {/* Giant 404 Number on top with laptop-responsive scaling */}
        <div className="select-none pointer-events-none animate-float-slow">
          <span
            className="font-extrabold text-[130px] sm:text-[180px] md:text-[220px] lg:text-[230px] xl:text-[270px] 2xl:text-[340px] tracking-tight leading-none bg-linear-to-b from-brand-lime via-[#92C92C]/85 to-[#386D22]/40 bg-clip-text text-transparent block font-heading"
            aria-hidden="true"
          >
            404
          </span>
        </div>

        {/* Title placed directly at the bottom of 404, in 2 lines, font-semibold */}
        <div className="-mt-6 sm:-mt-10 md:-mt-12 lg:-mt-12 xl:-mt-14 2xl:-mt-18 flex flex-col items-center max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[38px] xl:text-[46px] 2xl:text-[60px] font-semibold text-white tracking-tight leading-[1.14] font-heading animate-fade-in-up text-center">
            The page you are looking <br />
            for doesn&apos;t exist
          </h1>

          <p className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base text-white/85 font-normal max-w-lg mx-auto mt-3 sm:mt-4 lg:mt-3 xl:mt-4 leading-relaxed animate-fade-in-up delay-150">
            Try to use a correct url or go back to homepage to start again
          </p>

          <div className="mt-5 sm:mt-6 lg:mt-4 xl:mt-6 animate-fade-in-up delay-200">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-brand-lime text-slate-950 font-bold px-6 sm:px-7 lg:px-6 xl:px-7 py-2.5 sm:py-3 lg:py-2.5 xl:py-3 rounded-full text-xs sm:text-sm hover:bg-[#c3ea15] transition-all duration-300 shadow-xl hover:shadow-brand-lime/30 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
