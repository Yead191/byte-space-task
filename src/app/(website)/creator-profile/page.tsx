import { Metadata } from "next";
import { getCreatorProfile } from "@/data/creator-profile";
import { CreatorProfileView } from "@/components/features/creators/creator-profile-view";

export const metadata: Metadata = {
  title: "PurePearl Studio - Creator Profile | ByteSpace",
  description:
    "Welcome to the creative world of PurePearl Studio. Discover top UI/UX and web design courses on ByteSpace.",
};

export default function CreatorProfilePage() {
  const creator = getCreatorProfile();

  return <CreatorProfileView creator={creator} />;
}
