import {
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from "@chakra-ui/react";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React, { useEffect } from "react";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useUser } from "@clerk/nextjs";

export const Form = ({
  type,
  listings,
  setListings,
  submitting,
  handleSubmit,
}: {
  type: any;
  listings: any;
  setListings: any;
  submitting: any;
  handleSubmit: any;
}) => {
  const toast = useToast();

  const { user } = useUser();

  useEffect(() => {
    const emailAddress = user?.primaryEmailAddress?.emailAddress;
    console.log(emailAddress);
    if (emailAddress) {
      setListings({ ...listings, email_address: emailAddress });
    }
  }, [user]);

  const handleUpload = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "lnsjnwfp");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dps5hxns9/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      const imageUrl = data.secure_url;

      setListings({ ...listings, image_url: imageUrl });
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  return (
    <div className="w-full max-w-screen">
      <div className="flex min-h-screen mt-20 gap-28 flex-col justify-start items-center">
        {" "}
        <div className="">
          <h1 className="text-4xl text-[#FD7D01] font-bold">Create Listing</h1>
        </div>
        <div className="flex  flex-col items-center justify-center">
          {" "}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <Label className="" htmlFor="file-upload">
                Title
              </Label>
              <Input
                className="shadow mt-2 border-black appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Enter title"
                onChange={(e) =>
                  setListings({ ...listings, title: e.target.value })
                }
                value={listings.title}
              />
            </div>
            <div className="mb-4">
              <Label className="" htmlFor="file-upload">
                Description
              </Label>
              <Textarea
                required
                className="mt-2 pb-20 border-black resize-none"
                id="description"
                value={listings.description}
                onChange={(e) =>
                  setListings({ ...listings, description: e.target.value })
                }
                typeof="text"
                placeholder="Enter description"
              />
            </div>
            <div className="mb-4">
              <Label className="" htmlFor="file-upload">
                Category
              </Label>

              <Select
                className="mt-2"
                bg="white"
                borderColor="[#FD7D01]"
                color="[#FD7D01]"
                placeholder="Select"
                value={listings.category}
                required
                onChange={(e) =>
                  setListings({ ...listings, category: e.target.value })
                }
              >
                <option value="Clothing">Clothing</option>
                <option value="Shoes">Shoes</option>
                <option value="Technology">Technology</option>
                <option value="Home">Home</option>
              </Select>
            </div>
            <div className="mb-4 ">
              <Label className="mb-2" htmlFor="file-upload">
                Price
              </Label>
              <NumberInput
                defaultValue={0}
                precision={2}
                border={"black"}
                isRequired
                value={listings.price}
                onChange={(e) => setListings({ ...listings, price: e })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </div>
            <div className="mb-6 flex">
              <div className="grid mb-6 w-full max-w-sm items-center gap-1.5">
                <Label className="mb-2" htmlFor="file-upload">
                  Attach Image
                </Label>
                <Input
                  className="border-black"
                  onChange={(e) => handleUpload(e.target.files?.[0])}
                  id="file-upload"
                  type="file"
                  accept="image/"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#FD7D01] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() =>
                  toast({
                    title: "Listing created.",
                    description: "Your listing is now public.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    colorScheme: "orange",
                  })
                }
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
