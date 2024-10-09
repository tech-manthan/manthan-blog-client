import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useState } from "react";
import { useAppSelector } from "../../store";
import {
  getUser,
  isUserPresent,
  resetUser,
} from "../../store/slices/userSlice";
import { Avatar, Menu } from "../ui";
import { MenuItemType, Positions } from "../ui/menu/type";
import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../api";
import toast from "react-hot-toast";
import { errorParser } from "../../utils";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);
  const userExists = useAppSelector(isUserPresent);
  const user = useAppSelector(getUser);
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logoutUser,
    onSuccess: () => {
      dispatch(resetUser());
      toast.success("logout success", {});
    },
    onError: (err) => {
      toast.error(errorParser(err as AxiosError).msg);
    },
  });

  const menuItem: Array<MenuItemType> = [
    {
      type: "link",
      leftIconName: "user",
      text: "Profile",
      to: "/auth/profile",
    },
    {
      type: "link",
      leftIconName: "settings",
      text: "Setting",
      to: "/setting",
    },
    {
      type: "divider",
    },
    {
      type: "button",
      text: "Logout",
      rightIconName: "sign-out-alt",
      onClick: mutate,
    },
  ];

  return (
    <nav className="navbar">
      <Link to={"/"} className="w-10">
        <img src={logo} alt="" className="w-full" />
      </Link>

      <div
        className={`absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show ${
          searchBoxVisible ? "show" : "hide"
        }`}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full laceholder:text-dark-grey md:pl-12"
        />
        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey"></i>
      </div>

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
          onClick={() => setSearchBoxVisible((value) => !value)}
        >
          <i className="fi fi-rr-search text-xl"></i>
        </button>

        <Link
          to={"/auth/editor"}
          className="hidden md:flex gap-2 link hover:bg-transparent rounded-md"
        >
          <i className="fi fi-rr-file-edit"></i>
          <p>Write</p>
        </Link>

        {!userExists ? (
          <>
            <Link to={"/nonauth/login"} className="btn-dark rounded-md py-2">
              Sign In
            </Link>

            <Link
              to={"/nonauth/register"}
              className="btn-light rounded-md py-2 hidden md:block"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Menu position={Positions.bottomEnd} items={menuItem}>
              <Avatar imageUrl={user.personal_info.profile_img} />
            </Menu>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
