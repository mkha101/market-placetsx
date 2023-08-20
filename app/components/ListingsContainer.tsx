import React, { useEffect, useState } from "react";
import ListingsCard from "./ListingsCard"; // Adjust the import path
import { getListings } from "../../utils/requests";
import { useAuth } from "@clerk/nextjs";

const ListingsContainer = () => {
  const { userId, getToken } = useAuth();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const loadListings = async () => {
      const token = await getToken({ template: "supabase" });
      if (userId) {
        // Check if userId is defined
        const data = await getListings({ userId, token });
        setListings(data);
      }
    };
    loadListings();
  }, [userId]);
  return (
    <div className="w-3/4 flex flex-row flex-wrap gap-10 mt-10 ml-40">
      {listings.map((post) => (
        <ListingsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListingsContainer;