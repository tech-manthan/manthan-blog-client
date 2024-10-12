import { useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

type PathObject = {
  path: string;
  name: string;
};

const BreadCrumb = () => {
  const location = useLocation();

  const prefixPathName = useMemo<string>(() => {
    return location.pathname.split("/").find((path) => path == "auth") || "";
  }, [location.pathname]);

  const generatePaths = useCallback(
    function generatePaths(pathNames: string[]) {
      let prevPath = "/" + prefixPathName;
      const fullPathObject: PathObject[] = pathNames.map((pathName) => {
        prevPath = prevPath + pathName;
        const pathObject = {
          name: pathName === "" ? "HOME" : pathName.toUpperCase(),
          path: pathName === "" ? "/" : prevPath,
        };
        prevPath = prevPath + (prevPath.slice(-1) !== "/" ? "/" : "");
        return pathObject;
      });
      return fullPathObject;
    },
    [prefixPathName]
  );

  const paths = useMemo<Array<PathObject>>(() => {
    const pathsData =
      location.pathname == "/"
        ? [""]
        : location.pathname.split("/").filter((path) => path !== "auth");

    return generatePaths(pathsData);
  }, [location.pathname, generatePaths]);

  return (
    <div className="relative border-b border-grey w-full flex items-center gap-x-1 z-[2] pb-2">
      {paths.map((pathData, index) => {
        return (
          <p key={pathData.name} className="flex justify-center items-center">
            <Link
              to={pathData.path}
              className={`py-1 px-2 rounded-md ${
                location.pathname == pathData.path && "bg-grey"
              } hover:opacity-80 hover:bg-grey`}
            >
              {pathData.name}
            </Link>
            {index !== paths.length - 1 && (
              <i className="fi fi-rr-angle-small-right text-2xl"></i>
            )}
          </p>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
