import { Button } from "antd";
import StyledCommonHeader from "./StyledCommonHeader"
import { PNG_IMAGES } from "../../Routes/assets/constant";

const CommonHeader = () => {
  return (
    <StyledCommonHeader>
      <div className="common-header">
        <div className="header-logo"><img src={PNG_IMAGES.ALPHA_LOGO.URL} alt={PNG_IMAGES.ALPHA_LOGO.ALT} className="header-logo-img" /></div>
        <div>
          <ul className="header-menu">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="header-btn"><Button>Hello</Button></div>
      </div>
    </StyledCommonHeader>
  )
}

export default CommonHeader;