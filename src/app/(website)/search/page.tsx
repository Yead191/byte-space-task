import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolved = await searchParams;
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(resolved)) {
    if (typeof value === "string") {
      params.set(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((v) => params.append(key, v));
    }
  }

  const queryStr = params.toString();
  redirect(`/courses${queryStr ? `?${queryStr}` : ""}`);
}
