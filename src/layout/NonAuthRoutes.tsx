import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store";
import { isUserPresent } from "../store/slices/userSlice";

const NonAuthRoutes = () => {
  const location = useLocation();
  const userExists = useAppSelector(isUserPresent);

  if (userExists) {
    const returnTo =
      new URLSearchParams(location.search).get("returnTo") || "/";

    console.log("Return ", returnTo);
    return <Navigate to={returnTo} replace={true} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default NonAuthRoutes;
