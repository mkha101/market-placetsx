import { useUser } from "@clerk/nextjs";
import { CldImage } from "next-cloudinary";
import React from "react";
import Container from "./Container";
interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  email_address: string;
}

export const SmallListingsCard: React.FC<{ post: Post }> = ({ post }) => {
  const { user } = useUser();

  return (
    <div className="prompt_card" key={post.id}>
      {" "}
      <Container>
        <div className="flex flex-col justify center items-center gap-3">
          {" "}
          <div className="border-[1px] w-36 sm:w-44 sm:h-44  h-36 rounded-lg border-gray-200">
            <CldImage
              src={post.image_url}
              width={300}
              height={300}
              crop="pad"
              alt="Uploaded Image"
            />
          </div>
          <h1 className="">{post.title}</h1>
          <span className="">${post.price}</span>
        </div>
      </Container>
    </div>
  );
};
