import { PropsWithChildren } from "react";
import BreadCrumb from "../breadcrumb/BreadCrumb";

const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative p-4 min-h-[calc(100vh-80px)] max-w-[1440px] mx-auto">
      <BreadCrumb />
      {children}
    </div>
  );
};

export default PageWrapper;
