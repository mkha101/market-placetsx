"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { postListing } from "../../utils/requests";

import { Form } from "../components/Form/Form";
import { v4 as uuidv4 } from "uuid";

const CreateListing = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

  const [listings, setListings] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });

  const createListing = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      setSubmitting(true);

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
