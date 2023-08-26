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
    <Select>
      <SelectTrigger className="w-[180px] border-[1px] rounded-xl relative ">
        <div className="hidden sm:block">
          {" "}
          <SelectValue placeholder="Search by Category" />
        </div>
        <div className="block sm:hidden">
          {" "}
          <SelectValue placeholder="Category" />
        </div>{" "}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Clothing</SelectItem>
        <SelectItem value="dark">Shoes</SelectItem>
        <SelectItem value="system">Technology</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SearchByCategory;
