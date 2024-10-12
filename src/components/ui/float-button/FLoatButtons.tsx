import { PropsWithChildren } from "react";

type FloatButtonsProps = PropsWithChildren<{
  orientation?: "Vertical" | "Horizontal";
}>;

const FLoatButtons = ({
  orientation = "Horizontal",
  children,
}: FloatButtonsProps) => {
  return (
    <div
      className={`fixed  bottom-4 right-4 z-[9] flex justify-center items-center gap-x-2 md:absolute md:right-5 md:top-[0.125rem] md:h-14 ${
        orientation === "Vertical" && "flex-col gap-y-2"
      } sm:flex-row sm:gap-x-2`}
    >
      {children}
    </div>
  );
};

export default FLoatButtons;
