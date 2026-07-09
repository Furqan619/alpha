import { Flex, Drawer } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import PATH from "../../Routes/Paths";
import StyledCommonHeader from "./StyledCommonHeader"
import { PNG_IMAGES } from "../../Routes/assets/constant";
import { HEADER_MENU } from "./constant";


const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Flex justify="space-between" align="center" className="common-header">
      <div className="header-logo">
        <a href={PATH.HOME}>
          <img
            src={PNG_IMAGES.ALPHA_LOGO.URL}
            alt={PNG_IMAGES.ALPHA_LOGO.ALT}
            className="header-logo-img"
          />
        </a>
      </div>
      <div className="mobile-menu-button">
        <MenuOutlined onClick={toggleDrawer} />
      </div>
      <Drawer
        placement="right"
        onClose={toggleDrawer}
        open={open}
        className="mobile-menu-drawer"
        classNames={{ body: "mobile-menu-body" }}
      >
        <Flex justify="space-between" align="middle">
          <ul className="header-menu">
            {HEADER_MENU.map((item) => (
              <li key={item.name}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </Flex>
        <div className="header-btn">
            <a href={PATH.LOGIN} className="btn">Sign in</a>
        </div>
      </Drawer>
    </Flex>
  );
};

export default MobileHeader;
