import { COURSES_DATA } from "./courses";
import { Course } from "@/types";

export interface CreatorProfile {
  id: string;
  name: string;
  badge: string;
  role: string;
  avatar: string;
  bioParagraphs: string[];
  productsCount: number;
  followersCount: number;
  courses: Course[];
}

export const PUREPEARL_CREATOR_DATA: CreatorProfile = {
  id: "purepearl-studio",
  name: "PurePearl Studio",
  badge: "Creator",
  role: "Passionate UI/UX, Web designer",
  avatar: "/assets/creator/creator-dp.png",
  bioParagraphs: [
    "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
    "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  ],
  productsCount: 3,
  followersCount: 12,
  courses: COURSES_DATA.slice(0, 6),
};

export function getCreatorProfile(): CreatorProfile {
  return PUREPEARL_CREATOR_DATA;
}
