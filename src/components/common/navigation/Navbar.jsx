import { Bell, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../../../../libs/utils";
import avatar from "/avatar.png";

const NavBar = ({ data }) => {
  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <NavigationPill routePath={data} />
      <AvatarNotification imgSrc={avatar} />
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-full bg-[#E7E7E7] p-3 md:p-3.5">
      <span className="font-bold text-xl text-accent">Logo</span>
    </div>
  );
};

const NavigationPill = ({ routePath }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="rounded-[34px] h-full p-2 border border-[#D1D1D1]  justify-between gap-4 hidden md:flex">
      {routePath &&
        routePath.map(({ name, link, icon }, idx) => {
          let isActive = activeIndex === idx;
          return (
            <button
              key={idx}
              className={cn(
                "py-2.5 px-3.5 rounded-full flex items-center gap-1.5 transition-opacity duration-300",
                isActive && "bg-accent border-2 border-[#FCB4A5]"
              )}
              onClick={() => setActiveIndex(idx)}
            >
              {name === "Messages" ? (
                <div className="relative">
                  {icon(isActive && "text-white")}
                  <div
                    className={cn(
                      "w-1.5 h-1.5 bg-accent rounded-full absolute top-0 right-0 animate-pulse",
                      isActive && "bg-white"
                    )}
                  ></div>
                </div>
              ) : (
                icon(isActive && "text-white")
              )}
              <p
                className={cn(
                  "font-medium text-xl text-foreground_text_1",
                  isActive && "text-white"
                )}
              >
                {name}
              </p>
            </button>
          );
        })}
    </div>
  );
};

const AvatarNotification = ({ imgSrc }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Bell className="text-black cursor-pointer" />
        <div className="w-1.5 h-1.5 bg-accent rounded-full absolute top-0 right-0"></div>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-9 h-9 md:w-10 md:h-10 ">
          <img className="w-full h-full rounded-full" src={imgSrc} />
        </div>
        <ChevronDown className="w-4 h-4  md:w-5 md:h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
