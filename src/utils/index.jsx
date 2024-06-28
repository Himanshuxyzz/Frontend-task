import {
  Briefcase,
  Eye,
  HandCoins,
  MessageSquare,
  UserRoundCheck,
  Users,
} from "lucide-react";
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

export const JobDescription = [
  {
    jobId: 1234,
    responsibilites: [
      "Handle the UI/UX research design",
      "Work on researching on latest web applications designs & trends",
      "Work on conceptualizing and visualizing",
      "Work on creating graphics content and other graphic related works",
    ],
    Benefits: ["Health insurance", "Provident fund"],
    Schedule: ["Day shift"],
    Supplemental_pay_types: ["Performance bonus", "Yearly bonus"],
    work_location: ["In person"],
  },
];

export const JobPostingStatsData = [
  {
    detail: "Applicant",
    icon: <Users className="w-[20px] h-[20px] text-[#4F4F4F]" />,
    stat: 400,
  },
  {
    detail: "Matches",
    icon: <UserRoundCheck className="w-[20px] h-[20px] text-[#4F4F4F]" />,
    stat: 100,
  },
  {
    detail: "Messages",
    icon: <MessageSquare className="w-[20px] h-[20px] text-[#4F4F4F]" />,
    stat: 147,
  },
  {
    detail: "Views",
    icon: <Eye className="w-[20px] h-[20px] text-[#4F4F4F]" />,
    stat: 800,
  },
];
