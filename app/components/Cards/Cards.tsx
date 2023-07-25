"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import React from "react";

export const Cards = () => {
  return (
    <div className="mx-2 mb-4 flex w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow">
      <div className="flex flex-col p-5">
        <img className="h-20 w-20" src={""} alt="" />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900"></h5>
        <p className="mb-3 font-normal text-gray-700"></p>
        <p className="mb-3 font-normal text-gray-700"></p>
        <p className="mb-3 font-normal text-gray-700">⭐</p>
        <button className="inline-flex w-fit items-center gap-3 rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
