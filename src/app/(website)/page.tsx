import { HeroSection } from "@/components/features/home/hero-section";
import { TrustedLogos } from "@/components/features/home/trusted-logos";
import { FeaturedCoursesSection } from "@/components/features/home/featured-courses-section";
import { getCourses } from "@/data/courses";

export default async function HomePage() {
  const { courses } = await getCourses({ pageSize: 18 });

  return (
    <div className="w-full">
      <HeroSection />
      <TrustedLogos />
      <FeaturedCoursesSection initialCourses={courses} />
    </div>
  );
}
