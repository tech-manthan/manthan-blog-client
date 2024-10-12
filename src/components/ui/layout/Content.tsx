import { PropsWithChildren } from "react";

const Content = ({ children }: PropsWithChildren) => {
  return (
    // <div className="col-span-5 md:col-span-6 lg:col-span-4 p-0 md:p-4">
    //   {children}
    // </div>
    <div className="flex-grow p-0 md:p-4">{children}</div>
  );
};

export default Content;
