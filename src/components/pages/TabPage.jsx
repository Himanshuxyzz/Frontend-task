import React from "react";
import ContentContainer from "../layout/ContentContainer";
import { Database, MapPin, Pencil, Trash2 } from "lucide-react";
import { JobDescription, JobPostingStatsData } from "../../utils";
import BorderedSection from "../ui/BorderedSection";
import Separator from "../ui/Separator";

const TabPage = () => {
  return (
    // dont forget to remove the h-screen
    <div className="w-full max-w-full grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_209px] xl:grid-cols-[1fr_409px]">
      <div className="w-full">
        <BorderedSection className={"py-4 md:py-[36px]"} bottom={true}>
          <ContentContainer
            className={"flex items-center justify-center sm:justify-start"}
          >
            <div className="flex flex-col gap-2 sm:gap-3.5 md:gap-5">
              <div className="flex justify-between items-center gap-2.5 flex-wrap">
                <h2 className="font-semibold text-1xl sm:text-3xl md:text-4xl text-foreground_text_4 whitespace-nowrap">
                  Senior Product Designer
                </h2>
                <div className="hidden sm:block w-1 h-1 bg-[#D1D1D1] rounded-full"></div>
                <p className="text-foreground_text_2 font-medium text-xs sm:text-sm whitespace-nowrap">
                  posted 2 days ago
                </p>
                <div className="flex items-center justify-center gap-2.5 rounded-full  px-2 py-0.5 sm:py-1 border border-[#ABEFC6] bg-[#ECFDF3]">
                  <div className="w-2 h-2 bg-[#17B26A] rounded-full animate-pulse"></div>
                  <p className="text-[#067647] text-sm sm:text-base">Open</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <MapPin className="text-[#5D5D5D] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <p className="text-sm sm:text-lg md:text-xl font-medium text-[#5D5D5D]">
                    Delware, USA
                  </p>
                </div>

                <div className="w-1 h-1 bg-[#D1D1D1] rounded-full"></div>

                <div className="flex items-center  gap-2 sm:gap-3">
                  <Database className="text-[#5D5D5D] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <p className="text-sm sm:text-lg md:text-xl font-medium text-[#5D5D5D]">
                    $300K-$400K
                  </p>
                </div>
              </div>
            </div>
          </ContentContainer>
        </BorderedSection>

        <BorderedSection className={"py-4 md:py-[36px]"} bottom={true}>
          <ContentContainer className={"flex items-center justify-start"}>
            <div className="flex gap-3 justify-between md:justify-start md:gap-[70px] w-full flex-wrap">
              {/*  */}
              <div className=" flex flex-col items-start gap-2">
                <h3 className="text-foreground_text_3 font-medium text-nowrap">
                  Skills Required
                </h3>

                <div className="flex items-center gap-1.5 px-1.5 py-1 border border-[#D0D5DD] rounded-md">
                  <div className="w-4 h-4">
                    <img src="/figma.png" alt="figma" />
                  </div>
                  <p className="font-medium text-[#344054] text-xs">Figma</p>
                </div>

                <div className="flex items-center gap-1.5 px-1.5 py-1 border border-[#D0D5DD] rounded-md">
                  <div className="w-4 h-4">
                    <img src="/ai.png" alt="ai" />
                  </div>
                  <p className="font-medium text-[#344054] text-xs">
                    Adobe Illustrator
                  </p>
                </div>

                <div className="flex items-center gap-1.5 px-1.5 py-1 border border-[#D0D5DD] rounded-md">
                  <div className="w-4 h-4">
                    <img src="/xd.png" alt="xd" />
                  </div>
                  <p className="font-medium text-[#344054] text-xs">Adobe XD</p>
                </div>
              </div>

              <div className=" flex flex-col items-start gap-1.5 sm:gap-2">
                <h3 className="text-foreground_text_3 font-medium text-nowrap">
                  Prefferred Language
                </h3>
                <p className="text-base font-semibold text-foreground_text_4">
                  English
                </p>
              </div>

              <div className=" flex flex-col items-start gap-1.5 sm:gap-2">
                <h3 className="text-foreground_text_3 font-medium text-nowrap">
                  Type
                </h3>
                <p className="text-base font-semibold text-foreground_text_4">
                  Full time
                </p>
              </div>

              <div className=" flex flex-col items-start gap-1.5 sm:gap-2">
                <h3 className="text-foreground_text_3 font-medium text-nowrap">
                  Years of Experience
                </h3>
                <p className="text-base font-semibold text-foreground_text_4">
                  3+ Years of Experience
                </p>
              </div>
            </div>
          </ContentContainer>
        </BorderedSection>

        <BorderedSection className={"py-4 md:py-[36px]"} bottom={true}>
          <ContentContainer className={"flex items-center justify-start"}>
            <div className="flex flex-col gap-2 items-start">
              {JobDescription.map(
                (
                  {
                    responsibilites,
                    Benefits,
                    Schedule,
                    Supplemental_pay_types,
                    work_location,
                  },
                  idx
                ) => {
                  return (
                    <React.Fragment key={idx}>
                      <h3 className="text-sm font-medium text-foreground_text_3">
                        About the job
                      </h3>
                      {/* numbered list */}
                      <ol className="list-decimal pl-6 sm:pl-4 flex flex-col items-start gap-1.5 ">
                        {responsibilites.map((responsibility, idx) => {
                          return (
                            <li
                              key={idx}
                              className="font-medium text-foreground_text_4 text-base"
                            >
                              {responsibility}.
                            </li>
                          );
                        })}
                      </ol>
                      <h3 className="font-medium text-foreground_text_4 text-base my-1.5">
                        Benefits:
                      </h3>
                      {/*  unordered list */}
                      <ul className="list-disc pl-6 sm:pl-4 flex flex-col items-start gap-1.5 ml-2 sm:ml-4">
                        {Benefits.map((Benefit, idx) => {
                          return (
                            <li
                              key={idx}
                              className="font-medium text-foreground_text_4 text-base"
                            >
                              {Benefit}.
                            </li>
                          );
                        })}
                      </ul>
                      <h3 className="font-medium text-foreground_text_4 text-base my-1.5">
                        Schedule:
                      </h3>

                      <ul className="list-disc pl-6 sm:pl-4 flex flex-col items-start gap-1.5 ml-2 sm:ml-4">
                        {Schedule.map((Schedule, idx) => {
                          return (
                            <li
                              key={idx}
                              className="font-medium text-foreground_text_4 text-base"
                            >
                              {Schedule}.
                            </li>
                          );
                        })}
                      </ul>

                      <h3 className="font-medium text-foreground_text_4 text-base my-1.5">
                        Supplemental pay types:
                      </h3>

                      <ul className="list-disc pl-6 sm:pl-4 flex flex-col items-start gap-1.5 ml-2 sm:ml-4">
                        {Supplemental_pay_types.map((point, idx) => {
                          return (
                            <li
                              key={idx}
                              className="font-medium text-foreground_text_4 text-base"
                            >
                              {point}.
                            </li>
                          );
                        })}
                      </ul>

                      <h3 className="font-medium text-foreground_text_4 text-base my-1.5">
                        Work Location: {work_location}
                      </h3>
                    </React.Fragment>
                  );
                }
              )}
            </div>
          </ContentContainer>
        </BorderedSection>

        <BorderedSection className={"py-4 md:py-[36px]"} bottom={true}>
          <ContentContainer
            className={"flex items-center justify-center sm:justify-start"}
          >
            <div className="flex flex-col gap-2 sm:gap-4 w-full">
              <div className="py-2.5 flex items-center gap-3">
                <div className="w-10 h-10">
                  <img
                    className="rounded-[4px] w-full h-full
                    "
                    src={"/avatar.png"}
                  />
                </div>

                <p className="font-medium text-xl text-[#4F4F4F]">Atlassian</p>
              </div>

              <div className=" w-full flex items-center  gap-12">
                <div className="flex flex-col gap-[20px]  md:gap-[26px] items-start sm:pr-[68px]">
                  <div className="flex flex-col gap-2 items-start">
                    <h4 className="font-medium text-foreground_text_3 text-[14px]">
                      Company size
                    </h4>

                    <p className="font-medium text-foreground_text_4 text-base">
                      1k - 2k Employees
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 items-start">
                    <h4 className="font-medium text-foreground_text_3 text-[14px]">
                      Sector
                    </h4>

                    <p className="font-medium text-foreground_text_4 text-base">
                      Information Technology, Infrastructure
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 items-start">
                    <h4 className="font-medium text-foreground_text_3 text-[14px]">
                      Founded In
                    </h4>

                    <p className="font-medium text-foreground_text_4 text-base">
                      2019
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-[20px]  md:gap-[26px] items-start sm:pr-[68px]">
                  <div className="flex flex-col gap-2 items-start">
                    <h4 className="font-medium text-foreground_text_3 text-[14px]">
                      Type
                    </h4>

                    <p className="font-medium text-foreground_text_4 text-base">
                      Private
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 items-start">
                    <h4 className="font-medium text-foreground_text_3 text-[14px]">
                      Funding
                    </h4>

                    <p className="font-medium text-foreground_text_4 text-base">
                      Bootstrapped
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 items-start">
                    <h4 className="font-medium text-foreground_text_3 text-[14px]">
                      Founded By
                    </h4>

                    <p className="font-medium text-foreground_text_4 text-base">
                      <a href="#">Scott Farquhar</a>,{" "}
                      <a href="#">Mike Cannon-Brookes</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        </BorderedSection>
      </div>

      <div className="w-full">
        <BorderedSection
          className={
            "py-4 px-2 lg:px-[10px] xl:px-[25px] md:py-[36px] w-full h-full"
          }
          left={true}
          bottom={true}
        >
          <div className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-center xl:justify-between gap-4 md:flex-col xl:flex-row">
              <button className="flex items-center justify-center border border-accent py-3 xl:px-[34px] font-medium text-base bg-[#FEF4F2] rounded-lg text-accent gap-2.5 max-xl:w-full">
                <Trash2 className="w-5 h-5 text-accent" /> Delete job
              </button>
              <button className="flex items-center justify-center border-2 border-[#FED3CA] py-3 xl:px-[34px] font-medium text-base bg-accent rounded-lg text-white gap-2.5 max-xl:w-full">
                <Pencil className="w-5 h-5 text-white" />
                Edit job
              </button>
            </div>

            <div className="flex flex-col gap-4 px-2 lg:px-3 max-w-full">
              {JobPostingStatsData.map(({ detail, icon, stat }, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <JobPostingStats
                      detailName={detail}
                      icon={icon}
                      stat={stat}
                    />
                    {idx !== JobPostingStatsData.length - 1 && <Separator />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </BorderedSection>
      </div>
    </div>
  );
};

const JobPostingStats = ({ detailName, icon, stat }) => {
  return (
    <div className="flex items-center justify-between md:flex-col xl:flex-row">
      <div className=" px-2.5 py-2.5 flex items-center gap-2.5">
        {icon}
        <p className="font-medium text-base text-[#4F4F4F]">{detailName}</p>
      </div>
      {/* <JobPostingStats /> */}
      <div className="px-2.5 py-1.5">
        <p className="font-medium text-xl">{stat}</p>
      </div>
    </div>
  );
};

export default TabPage;
