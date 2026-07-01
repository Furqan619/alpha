import StyledHome from "./StyledHome";
import AppWrapperHOC from "../CommonHOC/AppWrapperHOC";
import { Button } from 'antd';
import { WEBP_IMAGES } from '../../Routes/assets/constant';

const Home = () => {
  return (
    <StyledHome>
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Our Website</h1>
          <p>Discover amazing content and explore new horizons.</p>
          <Button type="primary" size="large">Get Started</Button>
        </div>
        <div className="home-image">
          <img src={WEBP_IMAGES.CODE_BG.URL} alt={WEBP_IMAGES.CODE_BG.ALT} />
        </div>
      </div>
    </StyledHome>
  )
}

export default AppWrapperHOC(Home);