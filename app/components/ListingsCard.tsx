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

// Define a type/interface for the 'post' prop
interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image_url: string;
}

const ListingsCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="prompt_card" key={post.id}>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Text>{post.category}</Text>
            <Heading size="md">{post.title}</Heading>
            <CldImage
              src={post.image_url}
              width={300}
              height={300}
              gravity="auto"
              alt="Uploaded Image"
            />{" "}
            <Text>{post.description}</Text>
            <Text color="blue.600" fontSize="2xl">
              {post.price}
            </Text>
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
