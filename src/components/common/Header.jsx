import React from "react";
import NavBar from "./navigation/Navbar";

const Header = () => {
  return (
    <header className="w-full px-4 sm:px-8 ">
      <div className="py-4 md:py-5">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
