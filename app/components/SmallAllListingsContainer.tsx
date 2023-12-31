import React, { useEffect, useState } from "react";
import ListingsCard from "./ListingsCard"; // Adjust the import path
import { getAllListings } from "../../utils/requests";
import { useAuth } from "@clerk/nextjs";
import { SmallListingsCard } from "./SmallListingsCard";

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

const SmallAllListingsContainer = () => {
  const [listings, setListings] = useState<Post[]>([]);
  useEffect(() => {
    const loadListings = async () => {
      const data = await getAllListings({
        token: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      });
      setListings(data);
      console.log(listings);
    };
    loadListings();
  }, []);

  return (
    <div className="grid  grid-cols-2 sm:grid-cols-2  md:grid-cols-5 gap-10 ">
      {listings.map((post) => (
        <SmallListingsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default SmallAllListingsContainer;
