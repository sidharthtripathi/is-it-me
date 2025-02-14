"use client";
import { Searchbar } from "@/components/Searchbar";
import { ResultType, SearchResults } from "@/components/SearchResults";
import { useState } from "react";
export function HomePage() {
  const [results, setResults] = useState<ResultType[]>([]);
  return (
    <div>
      <Searchbar setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}
