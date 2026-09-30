import React, { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseDetailBySlug } from "@/data/course-details";
import { CourseDetailsView } from "@/components/features/courses/details/course-details-view";
import { CourseDetailsSkeleton } from "@/components/features/courses/details/course-details-skeleton";

interface CourseDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    tab?: string;
    rating?: string;
  }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseDetailBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found - ByteSpace",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} - ByteSpace`,
    description: course.subtitle,
    openGraph: {
      title: `${course.title} - ByteSpace`,
      description: course.subtitle,
      images: course.videoThumbnail ? [{ url: course.videoThumbnail }] : [],
    },
  };
}

export default async function CourseDetailPage({
  params,
  searchParams,
}: CourseDetailPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const tab = resolvedSearchParams?.tab || "about";
  const rating = resolvedSearchParams?.rating || "all";

  const course = await getCourseDetailBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <Suspense fallback={<CourseDetailsSkeleton />}>
      <CourseDetailsView
        course={course}
        activeTab={tab}
        ratingFilter={rating}
      />
    </Suspense>
  );
}
