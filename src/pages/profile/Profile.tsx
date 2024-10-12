import { useMemo } from "react";
import { CircleMenu, PageWrapper } from "../../components/ui";
import {
  CircleMenuItem,
  CircleMenuItems,
} from "../../components/ui/circle-menu/type";
import { useAppSelector } from "../../store";
import { getUser } from "../../store/slices/userSlice";
import { Roles } from "../../constants";

const items: [CircleMenuItem, CircleMenuItem] = [
  {
    to: "/auth/notification/comments",
    iconName: "comment-alt-check",
  },
  {
    to: "/auth/profile/edit",
    iconName: "user-pen",
  },
];

const Profile = () => {
  const user = useAppSelector(getUser);

  const menuItems: CircleMenuItems = useMemo<CircleMenuItems>(() => {
    if (user.role === Roles.WRITER) {
      return [
        ...items,
        {
          to: "/auth/profile/follower",
          iconName: "users-alt",
        },
        {
          to: "/auth/editor",
          iconName: "pen-clip",
        },
      ];
    } else {
      return [
        ...items,
        {
          to: "auth/profile/following",
          iconName: "following",
        },
        {
          to: "auth/profile/upgrade",
          iconName: "book-circle-arrow-up",
        },
      ];
    }
  }, [user.role]);
  return (
    <PageWrapper>
      <CircleMenu items={menuItems} />
    </PageWrapper>
  );
};

export default Profile;
