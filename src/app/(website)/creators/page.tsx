import { Metadata } from "next";
import { getCreatorProfile } from "@/data/creator-profile";
import { CreatorProfileView } from "@/components/features/creators/creator-profile-view";

export const metadata: Metadata = {
  title: "PurePearl Studio - Creators | ByteSpace",
  description:
    "Explore courses created by top mentors and creators on ByteSpace.",
};

export default function CreatorsPage() {
  const creator = getCreatorProfile();

  return <CreatorProfileView creator={creator} />;
}
