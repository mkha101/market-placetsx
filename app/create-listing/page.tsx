"use client";

import React from "react";
import { Textarea } from "@chakra-ui/react";

function page() {
  return (
    <div className="w-full max-w-screen">
      <div className="flex h-[80vh] mt-20 gap-28 flex-col justify-start items-center">
        {" "}
        <div className="">
          <h1 className="text-4xl font-bold">Create Listing</h1>
        </div>
        <div className="flex  flex-col items-center justify-center">
          {" "}
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder=""
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
                typeof="text"
                placeholder=""
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>

              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id=""
                type=""
                placeholder=""
              ></input>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
