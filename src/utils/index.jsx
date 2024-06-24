import { Briefcase, HandCoins, MessageSquare } from "lucide-react";
import { cn } from "../../libs/utils";

export const NavLinkMap = [
  {
    name: "Jobs",
    link: "/jobs",
    icon: (className) => {
      return (
        <Briefcase
          className={cn("w-4.5 h-4.5 text-foreground_text_1", className)}
        />
      );
    },
  },
  {
    name: "Messages",
    link: "/messages",
    icon: (className) => {
      return (
        <MessageSquare
          className={cn("w-4.5 h-4.5 text-foreground_text_1", className)}
        />
      );
    },
  },
  {
    name: "Payments",
    link: "/payments",
    icon: (className) => {
      return (
        <HandCoins
          className={cn("w-4.5 h-4.5 text-foreground_text_1", className)}
        />
      );
    },
  },
];

export const JobPostingPageSubRoutes = [
  {
    name: "Job preview",
    link: "/job-preview",
  },
  {
    name: "Applicants",
    link: "/applicants",
  },
  {
    name: "Match",
    link: "/match",
  },
  {
    name: "Messages",
    link: "/job-post-messages",
  },
];
