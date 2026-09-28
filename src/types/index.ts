export interface Course {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviewCount: number;
  instructorName: string;
  instructorAvatar: string;
  price: number;
  originalPrice?: number;
  thumbnail: string;
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
