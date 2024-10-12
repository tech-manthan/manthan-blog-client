import { PropsWithChildren } from "react";

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="border  border-dark-grey w-full col-span-1 shadow-lg rounded-md mx-auto p-2">
      {children}
    </div>
  );
};

export default Card;
