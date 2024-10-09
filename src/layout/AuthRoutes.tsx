import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store";
import { isUserPresent } from "../store/slices/userSlice";

const AuthRoutes = () => {
  const userExists = useAppSelector(isUserPresent);

  if (!userExists) {
    return (
      <Navigate
        to={`/nonauth/login?returnTo=${location.pathname}`}
        replace={true}
      />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthRoutes;
