import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="
      max-w-[1800px]
      mx-auto
      xl:px-20 
      md:px-10
      sm:px-2
      px-4
      overflow-hidden
    "
    >
      {children}
    </div>
  );
};

export default Container;
