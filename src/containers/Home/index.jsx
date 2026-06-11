import StyledHome from "./StyledHome";
import AppWrapperHOC from "../CommonHOC/AppWrapperHOC";
import { Button } from 'antd';
import { WEBP_IMAGES } from '../../Routes/assets/constant';

const Home = () => {
  return (
    <>
      <StyledHome>
        <Button className="main-btn">About Us</Button>
        <img src={WEBP_IMAGES.CODE_BG.URL} alt={WEBP_IMAGES.CODE_BG.ALT} width="200px" />

        
      </StyledHome>
    </>
  )
}

export default AppWrapperHOC(Home);