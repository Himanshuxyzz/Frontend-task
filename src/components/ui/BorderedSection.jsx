import { cn } from "../../../libs/utils";

const BorderedSection = ({ children, className, top, left, right, bottom }) => {
  return (
    <div
      className={cn(
        "border-accent_border_stroke w-full ",
        className,
        top && "border-t-[1px]",
        left && "border-l-[1px]",
        right && "border-r-[1px]",
        bottom && "border-b-[1px]"
      )}
    >
      {children}
    </div>
  );
};

export default BorderedSection;
