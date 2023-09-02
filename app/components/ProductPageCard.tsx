import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";

interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  email_address: string;
}

export const ProductPageCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="md:px-5 lg:px-0 sm:py-7 py-5" key={post.id}>
      {" "}
      <div className="border-[1px] w-36 sm:w-44 sm:h-44  cursor-pointer h-36 rounded-lg border-gray-200">
        {" "}
        <div className="flex flex-col   gap-2">
          <Link href={`/product-page/${post.id}`} passHref>
            <CldImage
              src={post.image_url}
              width={300}
              height={300}
              crop="pad"
              alt="Uploaded Image"
            />
          </Link>

          <h1 className="text-sm">{post.title}</h1>
          <span className="text-md">${post.price}</span>
        </div>
      </div>
    </div>
  );
};
