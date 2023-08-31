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
      <div className="border  rounded-full h-36 w-36 overflow-hidden">
        <img
          src={imageSrc}
          className="w-full h-full object-cover"
          alt="Apple Logo"
        />
      </div>
      <span className="text-black">{brandName}</span>
    </div>
  );
};
