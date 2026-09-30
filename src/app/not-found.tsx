import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NotFoundView } from "@/components/features/error/not-found-view";

export const metadata: Metadata = {
  title: "404 - Page Not Found | ByteSpace",
  description: "The page you are looking for doesn't exist.",
};

export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <NotFoundView />
      </main>
      <Footer />
    </div>
  );
}
