import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    // <div className="grid md:grid-cols-7 lg:grid-cols-5 h-[calc(100vh-164px)] mt-4 md:border border-grey rounded-md">
    //   {children}
    // </div>
    <div className="flex h-[calc(100vh-164px)] mt-4 md:border border-grey rounded-md">
      {children}
    </div>
  );
};

export default Layout;
