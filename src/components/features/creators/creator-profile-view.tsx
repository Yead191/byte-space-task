import React from "react";
import { CreatorProfile } from "@/data/creator-profile";
import { CreatorHero } from "./creator-hero";
import { CreatorCoursesSection } from "./creator-courses-section";

interface CreatorProfileViewProps {
  creator: CreatorProfile;
}

export function CreatorProfileView({ creator }: CreatorProfileViewProps) {
  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      <CreatorHero creator={creator} />
      <CreatorCoursesSection courses={creator.courses} />
    </div>
  );
}
