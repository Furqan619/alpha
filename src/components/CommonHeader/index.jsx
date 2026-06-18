import { Button } from "antd";
import PATH from "../../Routes/Paths";
import StyledCommonHeader from "./StyledCommonHeader"
import { PNG_IMAGES } from "../../Routes/assets/constant";
import { HEADER_MENU } from "./constant";

const CommonHeader = () => {
  return (
    <StyledCommonHeader>
      <div className="common-header">
        <div className="header-logo">
          <a href={PATH.HOME}>
            <img
              src={PNG_IMAGES.ALPHA_LOGO.URL}
              alt={PNG_IMAGES.ALPHA_LOGO.ALT}
              className="header-logo-img"
            />
          </a>
        </div>
        <div>
          <ul className="header-menu">
            {HEADER_MENU.map((item) => (
              <li key={item.name}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-btn">
          <Button href={PATH.SIGNUP} className="primary-btn">Sign in</Button>
        </div>
      </div>
    </StyledCommonHeader>
  )
}

export default CommonHeader;