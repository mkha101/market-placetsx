import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";

import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

// Define a type/interface for the 'post' prop
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

const ListingsCard: React.FC<{ post: Post }> = ({ post }) => {
  const { user } = useUser();

  return (
    <div className="hidden sm:block" key={post.id}>
      <div className="border-y-[1px] w-[75rem] p-3  rounded-none border-gray-200">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row gap-5">
            <div className="w-[300px] h-[300px]  border rounded-lg bg-gray-100">
              <Link href={`/product-page/${post.id}`} passHref>
                <CldImage
                  src={post.image_url}
                  width={300}
                  height={300}
                  crop="pad"
                  alt="Uploaded Image"
                />
              </Link>
            </div>
            <div className="flex-col flex justify-between">
              {" "}
              <div>
                {" "}
                <h1 className="font-semibold text-lg">{post.title}</h1>
                <p className="text-gray-600 text-sm">{post.category}</p>
              </div>{" "}
              <div>
                {" "}
                <span className="font-bold text-2xl">${post.price}</span>
              </div>
              <div></div>
            </div>{" "}
          </div>
          <div className="flex-col flex items-center justify-center ">
            <h3>Seller: {post.email_address}</h3>
          </div>{" "}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export const MobileListingsCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="block sm:hidden">
      {" "}
      <div className="  py-5" key={post.id}>
        {" "}
        <div className="border-[1px] max-w-screen w-full   cursor-pointer  rounded-lg border-gray-200">
          {" "}
          <div className="flex flex-col   justify-center  gap-2">
            <Link href={`/product-page/${post.id}`} passHref>
              <CldImage
                src={post.image_url}
                width={300}
                height={300}
                crop="pad"
                alt="Uploaded Image"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mt-3 gap-1">
          <h1 className="text-sm">{post.title}</h1>
          <span className="text-md">${post.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
