export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  title: string;
  slug?: string;
  category: string;
  instructor: string;
  instructorAvatar?: string;
  rating: number;
  reviewCount?: number;
  level: CourseLevel;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  price: number;
  originalPrice?: number;
  period?: string;
  image: string;
  studentAvatars?: string[];
  enrolledCount?: string;
  featured?: boolean;
}

export interface CourseFilterParams {
  query?: string;
  category?: string;
  level?: string;
  sort?: string;
  page?: number;
  pageSize?: number;
}

export interface PaginatedCoursesResult {
  courses: Course[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CourseLessonPreview {
  id: string;
  order: string;
  title: string;
  duration: string;
}

export interface CourseModuleItem {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
}

export interface CourseSneakPeekItem {
  id: string;
  title: string;
  image: string;
}

export interface CourseReviewItem {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

export interface CourseRatingDistributionItem {
  stars: number;
  count: number;
  percentage: number;
}

export interface CourseDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  instructor: string;
  instructorRole: string;
  instructorAvatar: string;
  level: CourseLevel;
  rating: number;
  reviewCount: number;
  studentsCount: string;
  lessonsCount: number;
  totalDuration: string;
  price: number;
  period: string;
  videoUrl: string;
  videoThumbnail?: string;
  previewLessons: CourseLessonPreview[];
  remainingVideosCount: number;
  descriptionParagraphs: string[];
  sneakPeeks: CourseSneakPeekItem[];
  keyPoints: string[];
  includedFeatures: string[];
  modules: CourseModuleItem[];
  progressPercentage: number;
  ratingsSummary: {
    average: number;
    distribution: CourseRatingDistributionItem[];
  };
  reviews: CourseReviewItem[];
}
