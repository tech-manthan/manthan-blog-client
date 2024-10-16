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
    to: "/auth/chats",
    iconName: "meeting",
  },
];

const Home = () => {
  const user = useAppSelector(getUser);

  const menuItems: CircleMenuItems = useMemo<CircleMenuItems>(() => {
    if (user.role === Roles.WRITER) {
      return [
        ...items,
        {
          to: "/auth/profile/followers",
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
          to: "auth/followings",
          iconName: "following",
        },
        {
          to: "auth/become-writer",
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

export default Home;
