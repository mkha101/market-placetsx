"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { searchListings } from "@/utils/requests";
import { SmallListingsCard } from "@/app/components/SmallListingsCard";
import ListingsCard, {
  MobileListingsCard,
} from "@/app/components/ListingsCard";
import Container from "@/app/components/Container";

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  condition: string;
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

  const length = results.length;

  return (
    <div className="w-full  sm:relative max-w-screen">
      <Container>
        <div className="sm:absolute mt-10 sm:mt-0 sm:flex-none sm:justify-normal flex justify-center sm:items-start items-center flex-col sm:top-10">
          <h1>
            Search Results for{" "}
            <span className="text-blue-600">&quot;{query}&quot;</span>
          </h1>
          <p className="text-sm text-gray-400">Showing 1-{length} Results </p>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: &quot;{error}&quot;</p>}
          {!isLoading && !error && (
            <ul className="mt-10">
              {results.map((result) => (
                <div className="">
                  <div className="block sm:hidden">
                    {" "}
                    <MobileListingsCard key={result.id} post={result} />
                  </div>{" "}
                  <div className="hidden sm:block">
                    {" "}
                    <ListingsCard key={result.id} post={result} />
                  </div>{" "}
                </div>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Results;
