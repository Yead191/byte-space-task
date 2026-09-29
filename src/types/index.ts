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
