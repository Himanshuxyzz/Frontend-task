import React from "react";
import { cn } from "../../../libs/utils";

const ContentContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "px-2 md:mx-auto lg:ml-[80px] max-w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
