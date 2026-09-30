import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function TestimonialSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        className="absolute -top-24 sm:-top-32 left-1/2 translate-x-[-42%] w-95 sm:w-130 lg:w-155 h-70 sm:h-95 rounded-full blur-[80px] sm:blur-[110px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(203, 252, 1, 0.42) 0%, rgba(203, 252, 1, 0.18) 50%, rgba(203, 252, 1, 0.03) 75%, transparent 100%)",
        }}
      />

      <div
        className="absolute top-8 sm:top-12 -right-24 sm:-right-32 w-85 sm:w-120 lg:w-140 h-85 sm:h-120 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(254, 240, 138, 0.55) 0%, rgba(250, 204, 21, 0.22) 45%, rgba(250, 204, 21, 0.04) 70%, transparent 100%)",
        }}
      />

      <div
        className="absolute -bottom-24 sm:-bottom-32 -left-20 sm:-left-28 w-90 sm:w-125 lg:w-140 h-80 sm:h-110 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(165, 180, 252, 0.48) 0%, rgba(147, 197, 253, 0.22) 50%, rgba(147, 197, 253, 0.04) 75%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-14 lg:mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-heading font-semibold text-slate-900 text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] tracking-tight">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 flex items-center h-full">
            <p className="text-slate-600 text-xs sm:text-[13px] lg:text-sm font-normal leading-relaxed max-w-xl">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-100/80 flex flex-col justify-between transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-5 sm:mb-6">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-heading font-semibold text-slate-900 text-base sm:text-lg mb-1 tracking-tight">
                  {t.name}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-brand-blue mb-5 sm:mb-6">
                  {t.role}
                </p>

                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed">
                  {t.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
