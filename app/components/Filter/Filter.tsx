"use client";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import React from "react";

export const Filter = () => {
  return (
    <div className="mt-[45px] box-border sm:block hidden rounded-lg h-[800px] w-[300px] p-4 border-[2px]  ">
      <div className="flex flex-col gap-5 ">
        <h1 className="font-semibold">Filter</h1>
      </div>
      <div className="mt-10 flex flex-col gap-20">
        <div className="flex flex-col gap-5 ">
          <h1 className="font-semibold">Price</h1>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Checkbox defaultChecked>Lowest to Highest</Checkbox>
          <Checkbox defaultChecked>Highest to Lowest</Checkbox>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="font-semibold">Category</h1>
          <Checkbox defaultChecked>Shoes</Checkbox>
          <Checkbox defaultChecked>Clothing</Checkbox>
          <Checkbox defaultChecked>Technology</Checkbox>
          <Checkbox defaultChecked>Home</Checkbox>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="font-semibold">Date</h1>
          <Checkbox defaultChecked>Oldest to Newest</Checkbox>
          <Checkbox defaultChecked>Newest to Oldest</Checkbox>
        </div>
      </div>
    </div>
  );
};
