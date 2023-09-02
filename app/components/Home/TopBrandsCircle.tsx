import React from "react";

interface TopBrandsCircleProps {
  imageSrc: string;
  brandName: string;
}

export const TopBrandsCircle: React.FC<TopBrandsCircleProps> = ({
  imageSrc,
  brandName,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 ">
      <div className="border  rounded-full w-20 h-20 sm:h-36 sm:w-36 overflow-hidden">
        <img
          src={imageSrc}
          className="w-full cursor-pointer h-full object-cover"
          alt="Apple Logo"
        />
      </div>
      <span className="text-black">{brandName}</span>
    </div>
  );
};
