import { Metadata } from "next";
import { NotFoundView } from "@/components/features/error/not-found-view";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return <NotFoundView />;
}
