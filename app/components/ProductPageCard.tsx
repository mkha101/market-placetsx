import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import { Button } from "@chakra-ui/react";

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

export const ProductPageCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="w-full h-[120vh] max-w-screen" key={post.id}>
      <div className="flex sm:flex-row flex-col  justify-center gap-14 p-5 sm:mr-28  ">
        <div className="border-[1px]   max-w-screen  sm:mt-24 sm:w-[40rem] sm:h-[40rem] cursor-pointer  rounded-lg border-gray-200">
          <CldImage
            src={post.image_url}
            width={700}
            height={700}
            crop="pad"
            alt="Uploaded Image"
          />
        </div>
        <div className="flex sm:mt-24 gap-4 justify-between flex-col">
          {" "}
          <h1 className="font-bold text-3xl">{post.title}</h1>
          <span className="text-3xl font-semibold">${post.price}</span>{" "}
          <div className="flex flex-col gap-3 ">
            {" "}
            <Button className="bg-blue-700 sm:w-[400px] text-white">
              Buy Now
            </Button>
            <Button className="bg-blue-700 sm:w-[400px] text-white">
              Add to Cart
            </Button>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col sm:h-10 ">
              <span className="font-bold text-lg">Condition</span>{" "}
              <p className="max-w-sm  font-light leading-relaxed">
                {post.condition}
              </p>
            </div>
            <div className="flex flex-col sm:h-7 ">
              {" "}
              <span className="font-bold text-lg">Description</span>{" "}
              <p className="max-w-sm font-light leading-relaxed">
                {post.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
