"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postListing } from "../../utils/requests";
import { useAuth } from "@clerk/nextjs";
import { Form } from "../components/Form/Form";

const CreateListing = () => {
  const router = useRouter();
  const { userId, getToken } = useAuth();

  const [submitting, setSubmitting] = useState(false);

  const [listings, setListings] = useState({
    title: "",
    description: "",
    category: "",
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

      const posts = await postListing({ listings, userId, token });
      setListings(listings);
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
