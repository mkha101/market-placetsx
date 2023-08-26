import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchByCategory = () => {
  return (
    <div>
      <div className="hidden sm:flex">
        <Select>
          <SelectTrigger className="w-[180px] cursor-pointer rounded-full rounded-r-none ">
            <SelectValue placeholder="Search by Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem className="cursor-pointer" value="Clothing">
              Clothing
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Shoes">
              Shoes
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Electronics">
              Electronics
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Home">
              Home
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Beauty">
              Beauty
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Health">
              Health
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Video Games">
              Video Games
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Books">
              Books
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex sm:hidden">
        <Select>
          <SelectTrigger className="w-[110px] cursor-pointer rounded-full rounded-r-none  ">
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem className="cursor-pointer" value="Clothing">
              Clothing
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Shoes">
              Shoes
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Electronics">
              Electronics
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Home">
              Home
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Beauty">
              Beauty
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Health">
              Health
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Video Games">
              Video Games
            </SelectItem>
            <SelectItem className="cursor-pointer" value="Books">
              Books
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchByCategory;
