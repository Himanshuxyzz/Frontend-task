import React, { useState } from "react";
import NavBar from "./navigation/Navbar";
import TabNavigation from "./navigation/TabNavigation";
import { JobPostingPageSubRoutes } from "../../utils";
import { NavLinkMap } from "../../utils";

const Header = () => {
  return (
    <header className="w-full ">
      <div className="py-3 md:py-[18px] px-4 sm:px-6">
        <NavBar data={NavLinkMap} />
      </div>
      <TabNavigation data={JobPostingPageSubRoutes} />
    </header>
  );
};

export default Header;
