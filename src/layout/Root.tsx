import { Outlet } from "react-router-dom";

import { Navbar } from "../components";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { getSelf } from "../api";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { addUser } from "../store/slices/userSlice";
import { UserData } from "../types/sliceTypes";

const Root = () => {
  // const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["self"],
    queryFn: getSelf,
    retry: (failureCount: number, error) => {
      if (error instanceof AxiosError && error.response?.status === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(addUser((data as UserData).user));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Root;
