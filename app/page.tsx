"use client"
import { Searchbar } from "@/components/Searchbar";
import { ResultType, SearchResults } from "@/components/SearchResults";
import { useState } from "react";


export default function Home() {
  const [results,setResults] = useState<ResultType[]>([])
  return (
    <div>
      <Searchbar setResults={setResults}/>
      <SearchResults results={results}/>
    </div>
  )
}
