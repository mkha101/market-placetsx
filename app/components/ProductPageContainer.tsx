import { getProduct } from "@/utils/requests";
import React, { useEffect, useState } from "react";
import { SmallListingsCard } from "./SmallListingsCard";
import { ProductPageCard } from "./ProductPageCard";

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  email_address: string;
}

export default function ProductPageContainer({
  params,
}: {
  params: { listingId: string };
}) {
  const { listingId } = params;

  const [listing, setListings] = useState<Post[]>([]);

  useEffect(() => {
    const loadListings = async () => {
      if (listing) {
        const token = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

        const data = await getProduct({ listingId, token });
        console.log("Data:", data);

        setListings(data);
      }
    };
    loadListings();
  }, [listingId]);

  return (
    <main className="">
      <div className="">
        {listing?.map((post) => (
          <ProductPageCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
