import { Outlet } from "react-router-dom";
import {
  CircleMenu,
  Content,
  Layout,
  PageWrapper,
  Sidebar,
} from "../../components/ui";
import { CircleMenuItems } from "../../components/ui/circle-menu/type";

const dashboardMenu: CircleMenuItems = [
  {
    to: "/auth/dashboard/blogs",
    iconName: "document",
  },
  {
    to: "/auth/dashboard",
    iconName: "analyse-alt",
  },
  {
    to: "/auth/editor",
    iconName: "pen-clip",
  },
  {
    to: "/auth/chats",
    iconName: "meeting",
  },
];

const Dashboard = () => {
  return (
    <PageWrapper>
      <CircleMenu items={dashboardMenu} />

      <div className="relative z-[2]">
        <Layout>
          <Sidebar></Sidebar>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
