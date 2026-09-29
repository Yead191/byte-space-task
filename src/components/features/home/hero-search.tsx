"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/courses?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto mb-10 sm:mb-14 animate-fade-in-up delay-150"
    >
      <div className="w-full sm:w-auto flex items-center bg-white px-5 py-3 rounded-full shadow-xl border border-white/20 transition-all focus-within:ring-4 focus-within:ring-brand-lime/40">
        <Search className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
        <input
          type="text"
          placeholder="Course, topic, creator"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent border-0 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none w-full sm:w-64 md:w-72"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto bg-brand-lime text-slate-950 font-bold px-8 py-3 rounded-full text-sm hover:bg-[#c3ea15] transition-all shadow-md active:scale-95 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
