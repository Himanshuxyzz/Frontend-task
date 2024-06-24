import { Bell, Briefcase, HandCoins, MessageSquare } from "lucide-react";
import { cn } from "../../libs/utils";

export const NavLinkMap = [
  {
    name: "Jobs",
    link: "/jobs",
    icon: (className) => {
      return (
        <Briefcase className={cn("w-4.5 h-4.5 text-[#B0B0B0]", className)} />
      );
    },
  },
  {
    name: "Messages",
    link: "/messages",
    icon: (className) => {
      return (
        <MessageSquare
          className={cn("w-4.5 h-4.5 text-[#B0B0B0]", className)}
        />
      );
    },
  },
  {
    name: "Payments",
    link: "/payments",
    icon: (className) => {
      return (
        <HandCoins className={cn("w-4.5 h-4.5 text-[#B0B0B0]", className)} />
      );
    },
  },
];
