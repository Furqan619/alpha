import { useDispatch } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button, Col, message, Flex } from 'antd';

import { LoginOutlined } from '@ant-design/icons';
import PATH from "../../Routes/Paths";
import StyledSideNavigation from './StyledSideNavigation';
import { logoutThunk } from "../../containers/Login/thunk";
import { SIDE_NAVIGATION_ROUTES } from "./Constant";
import { MESSAGES } from "../../Routes/assets/utils";

const SideNavigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await dispatch(logoutThunk());
    navigate(PATH.LOGIN);
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