/*import {
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

// Define a type/interface for the 'post' prop
interface Post {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

const ListingsCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="prompt_card" key={post.id}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          width={300}
          height={300}
          src="/iphone.jpeg"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{post.title}</Heading>

            <Text py="2">{post.description}</Text>
            <Text>{post.price}</Text>
          </CardBody>

          <CardFooter>
            <Button colorScheme="blue">Buy</Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default ListingsCard;
*/
