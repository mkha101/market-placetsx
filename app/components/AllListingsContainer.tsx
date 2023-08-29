import React, { useEffect, useState } from "react";
import ListingsCard from "./ListingsCard"; // Adjust the import path
import { getAllListings } from "../../utils/requests";
import { useAuth } from "@clerk/nextjs";

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  email_address: string;
}

const AllListingsContainer = () => {
  const [listings, setListings] = useState<Post[]>([]);

  useEffect(() => {
    const loadListings = async () => {
      const data = await getAllListings({
        token: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      });
      setListings(data);
    };
    loadListings();
  }, []);

  return (
    <div className="  sm:ml-20   mt-10 ">
      {listings.map((post) => (
        <ListingsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default AllListingsContainer;
