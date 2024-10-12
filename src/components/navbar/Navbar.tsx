import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useMemo, useState } from "react";
import { useAppSelector } from "../../store";
import {
  getUser,
  isUserPresent,
  resetUser,
} from "../../store/slices/userSlice";
import { Avatar, Menu, SearchBox } from "../ui";
import { MenuItemType, Positions } from "../ui/menu/type";
import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../api";
import toast from "react-hot-toast";
import { errorParser } from "../../utils";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { Roles } from "../../constants";

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

  const menuItem = useMemo<Array<MenuItemType>>(() => {
    const items: Array<MenuItemType> = [
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
    ];

    if (user.role === Roles.WRITER) {
      items.push({
        type: "link",
        leftIconName: "apps",
        text: "Dashboard",
        to: "/auth/dashboard",
      });
    }

    return [
      ...items,
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
  }, [user, mutate]);

  return (
    <nav className="navbar">
      <Link to={"/"} className="w-10">
        <img src={logo} alt="" className="w-full" />
      </Link>

      <SearchBox visible={searchBoxVisible} />

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button
          className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
          onClick={() => setSearchBoxVisible((value) => !value)}
        >
          <i className="fi fi-rr-search text-xl"></i>
        </button>

        <Link
          to={"/auth/editor"}
          className="hidden md:flex gap-2 link rounded-md"
        >
          <i className="fi fi-rr-file-edit"></i>
          <p>Write</p>
        </Link>

        {userExists && (
          <button className="bg-grey w-12 h-12 rounded-full flex items-center justify-center">
            <i className="fi fi-rr-bell text-xl"></i>
          </button>
        )}

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
