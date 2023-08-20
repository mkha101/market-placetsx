import {
  Textarea,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from "@chakra-ui/react";

import Image from "next/image";

import React from "react";

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

  return (
    <div className="w-full max-w-screen">
      <div className="flex h-[80vh] mt-20 gap-28 flex-col justify-start items-center">
        {" "}
        <div className="">
          <h1 className="text-4xl text-[#FD7D01] font-bold">Create Listing</h1>
        </div>
        <div className="flex  flex-col items-center justify-center">
          {" "}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow border-[#FD7D01] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder=""
                onChange={(e) =>
                  setListings({ ...listings, title: e.target.value })
                }
                value={listings.title}
              ></input>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <Textarea
                className="mb-2"
                id="description"
                value={listings.description}
                onChange={(e) =>
                  setListings({ ...listings, description: e.target.value })
                }
                borderColor="[#FD7D01]"
                focusBorderColor=""
                typeof="text"
                placeholder=""
                size="sm"
                resize={"none"}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>

              <Select
                bg="white"
                borderColor="[#FD7D01]"
                color="[#FD7D01]"
                placeholder=""
                value={listings.category}
                onChange={(e) =>
                  setListings({ ...listings, category: e.target.value })
                }
              >
                <option value="Clothing">Clothing</option>
                <option value="Shoes">Shoes</option>
                <option value="Technology">Technology</option>
              </Select>
            </div>
            <div className="mb-6 ">
              <NumberInput
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
              <label htmlFor="file-upload" className="custom-file-upload">
                Attach Image
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/"
                onChange={(e) =>
                  setListings({
                    ...listings,
                    imageFile: e.target.files?.[0] || null,
                  })
                }
              />
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
