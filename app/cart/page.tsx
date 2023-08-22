"use client";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { CartItem } from "../components/Cart/CartItem";
import { CartOrderSummary } from "../components/Cart/CartorderSummary";
import { cartData } from "../components/Cart/_data";
import { getListings } from "../../utils/requests";
import { useAuth } from "@clerk/nextjs";
import ListingsContainer from "../components/UserListingsContainer";

import { useState } from "react";

export default function Page() {
  const { userId, getToken } = useAuth();
  return (
    <Box
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart (3 items)
          </Heading>

          <Stack spacing="6">
            <ListingsContainer userId={userId} getToken={getToken} />
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link href="/products" color={mode("blue.500", "blue.200")}>
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}
