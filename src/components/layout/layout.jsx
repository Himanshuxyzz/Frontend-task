import React from "react";
import { cn } from "../../../libs/utils";

const Layout = ({ children, classname }) => {
  return <div className={cn("w-full h-screen", classname)}>{children}</div>;
};

export default Layout;
