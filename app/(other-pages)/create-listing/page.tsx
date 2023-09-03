"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postListing } from "../../../utils/requests";
import { useAuth, useUser } from "@clerk/nextjs";
import { Form } from "../../components/Form";

const CreateListing = () => {
  const router = useRouter();
  const { userId, getToken } = useAuth();

  const [submitting, setSubmitting] = useState(false);

  const [listings, setListings] = useState({
    title: "",
    description: "",
    category: "",
    condition: "",
    price: "",
    image_url: "",
    email_address: "",
  });

  const createListing = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setSubmitting(true);
      const token = await getToken({ template: "supabase" });

      if (!userId) {
        console.error("User ID is null or undefined.");
        return;
      }

      const postData = { ...listings, userId, image_url: listings.image_url };
      const posts = await postListing({ listings: postData, userId, token });

      if (listings) {
        router.push("/my-listings");
      }
      console.log(listings);
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Post"
      listings={listings}
      setListings={setListings}
      submitting={submitting}
      handleSubmit={createListing}
    />
  );
};

export default CreateListing;
