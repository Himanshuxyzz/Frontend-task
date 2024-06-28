import React, { useState } from "react";
import ContentContainer from "../../layout/ContentContainer";
import { cn } from "../../../../libs/utils";
import BorderedSection from "../../ui/BorderedSection";

const TabNavigation = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <BorderedSection top={true} bottom={true}>
      <ContentContainer className={"w-content flex justify-center"}>
        <div className="flex items-center justify-between lg:justify-start md:gap-[90px] w-full">
          {data &&
            data.map(({ name }, idx) => {
              let isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  className="pt-4 md:pt-5"
                  onClick={() => setActiveIndex(idx)}
                >
                  <p
                    className={cn(
                      "text-foreground_text_2 text-base md:text-lg font-medium mb-2 text-center",
                      isActive && "text-accent"
                    )}
                  >
                    {name}
                  </p>
                  <div
                    className={cn(
                      "w-[64%] border border-white border-b-2 mx-auto",
                      isActive && "border-b-accent"
                    )}
                  ></div>
                </button>
              );
            })}
        </div>
      </ContentContainer>
    </BorderedSection>
  );
};

export default TabNavigation;
