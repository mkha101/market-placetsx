"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchListings } from "@/utils/requests";
import { SmallListingsCard } from "@/app/components/SmallListingsCard";

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  email_address: string;
}
const Results = () => {
  const [results, setResults] = useState<Post[]>([]); // Specify the type as Post[]
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use the useSearchParams hook to get the search query
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        setIsLoading(true);
        setError(null);

        try {
          const token = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
          const data = await searchListings({ query, token });
          setResults(data);
        } catch (err) {
          setError;
        } finally {
          setIsLoading(false);
        }
      } else {
        // Handle empty query or clear the results
        setResults([]);
      }
    };
    fetchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <ul>
          {results.map((result) => (
            <SmallListingsCard key={result.id} post={result} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Results;
