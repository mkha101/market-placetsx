import React, { useEffect, useState } from "react";
import ListingsCard, { MobileListingsCard } from "./ListingsCard"; // Adjust the import path
import { getListings } from "../../utils/requests";
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

interface SmallUserListingsContainerProps {
  userId: string | null | undefined;
  getToken: any;
}

const SmallUserListingsContainer: React.FC<
  SmallUserListingsContainerProps
> = ({}) => {
  const { userId, getToken } = useAuth();

  const [listings, setListings] = useState<Post[]>([]);

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
    <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-5 gap-10 ">
      {listings.map((post) => (
        <MobileListingsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default SmallUserListingsContainer;
