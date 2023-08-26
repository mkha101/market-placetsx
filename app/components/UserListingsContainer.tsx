import React, { useEffect, useState } from "react";
import ListingsCard from "./ListingsCard"; // Adjust the import path
import { getListings } from "../../utils/requests";
import { useAuth } from "@clerk/nextjs";
import { getToken } from "@chakra-ui/react";

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  email_address: string;
}

interface ListingsContainerProps {
  userId: string | null | undefined;
  getToken: any;
}

const ListingsContainer: React.FC<ListingsContainerProps> = ({}) => {
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
    <div className="w-full flex flex-row justify-center sm:justify-start sm:ml-40 flex-wrap gap-10  ">
      {listings.map((post) => (
        <ListingsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListingsContainer;
