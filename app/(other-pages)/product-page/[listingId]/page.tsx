"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProduct } from "@/utils/requests";
import { SmallListingsCard } from "@/app/components/SmallListingsCard";
import ProductPageContainer from "@/app/components/ProductPageContainer";

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  email_address: string;
}

export default function ProductPage({
  params,
}: {
  params: { listingId: string };
}) {
  const { listingId } = params;

  return (
    <div className="w-full max-w-screen">
      <div>
        <ProductPageContainer
          params={{
            listingId,
          }}
        />
      </div>
    </div>
  );
}
