import { Button, Flex } from "antd";
import PATH from "../../Routes/Paths";
import StyledCommonHeader from "./StyledCommonHeader"
import { PNG_IMAGES } from "../../Routes/assets/constant";
import { HEADER_MENU } from "./constant";

const MainHeader = () => {
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
          <Button href={PATH.LOGIN} className="primary-btn">Sign in</Button>
      </div>
    </Flex>
  )
}

export default MainHeader;