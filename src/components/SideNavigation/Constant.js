import {
  DashboardOutlined,
  UserOutlined,
} from '@ant-design/icons';
import PATH from "../../Routes/Paths";


const SIDE_NAVIGATION_ROUTES = [
  {
    label: "Dashboard",
    icon: DashboardOutlined,
    path: PATH.JOBS
  },
  {
    label: "Profile",
    icon: UserOutlined,
    path: PATH.PROFILE
  }
];

export {
  SIDE_NAVIGATION_ROUTES,
};