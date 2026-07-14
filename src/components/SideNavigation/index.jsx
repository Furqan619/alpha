import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button, Col, message, Flex } from 'antd';

import { LoginOutlined } from '@ant-design/icons';
import PATH from "../../Routes/Paths";
import StyledSideNavigation from './StyledSideNavigation';
import { getAuth, signOut } from "firebase/auth";
import { SIDE_NAVIGATION_ROUTES } from "./Constant";

const SideNavigation = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      message.success("Successfully logged out");
      setTimeout(() => {
        navigate(PATH.LOGIN);
      }, 500);
    } catch (error) {
      message.error("Error signing out. Please try again.");
    }
  };

  return (
    <StyledSideNavigation>
      {SIDE_NAVIGATION_ROUTES.map((route) => {
        const Icon = route.icon;
        const isActive = location.pathname === route.path;
        return (
          <Link
            to={route.path}
            key={route.label}
            className={`side-nav-link${isActive ? ' active' : ''}`}
          >
            <Flex align="center" justify="start" gap={10}>
              <Icon />
              <div>{route.label}</div>
            </Flex>
          </Link>
        );
      })}
      <Button icon={<LoginOutlined />} type="primary" onClick={handleLogout} className="side-nav-button">
        Logout
      </Button>
    </StyledSideNavigation>
  );
};

export default SideNavigation;