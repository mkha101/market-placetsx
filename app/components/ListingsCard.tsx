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

// Define a type/interface for the 'post' prop
interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
  email_address: string;
}

const ListingsCard: React.FC<{ post: Post }> = ({ post }) => {
  const { user } = useUser();

  return (
    <div className="prompt_card" key={post.id}>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Text>{post.category}</Text>
            <Heading size="md">{post.title}</Heading>
            <div className="w-52 h-22">
              <CldImage
                src={post.image_url}
                width={600}
                height={600}
                crop="pad"
                alt="Uploaded Image"
              />{" "}
            </div>

            <Text>{post.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              ${post.price}
            </Text>
            <Text>Seller: {post.email_address}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ListingsCard;
