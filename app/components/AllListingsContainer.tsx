import React, { useEffect, useState } from "react";
import ListingsCard from "./ListingsCard"; // Adjust the import path
import { getAllListings } from "../../utils/requests";
import { useAuth } from "@clerk/nextjs";

const AllListingsContainer = () => {
  const { getToken } = useAuth();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const loadListings = async () => {
      const token = await getToken({ template: "supabase" });

      // Fetch all listings without specifying a userId
      const data = await getAllListings({ token });
      setListings(data);
    };
    loadListings();
  }, []);

  return (
    <div className="w-3/4 flex flex-row flex-wrap gap-10 mt-10 ml-40">
      {listings.map((post) => (
        <ListingsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default AllListingsContainer;
