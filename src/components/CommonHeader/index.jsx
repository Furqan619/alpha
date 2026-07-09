import { Button, Flex, message } from "antd";
import { useState, useEffect } from "react";
import PATH from "../../Routes/Paths";
import StyledCommonHeader from "./StyledCommonHeader"
import { PNG_IMAGES } from "../../Routes/assets/constant";
import { HEADER_MENU } from "./constant";
import MainHeader from "./MainHeader";
import MobileHeader from "./MobileHeader";


const CommonHeader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <StyledCommonHeader>
      {isMobile ? <MobileHeader/> : <MainHeader/>}
    </StyledCommonHeader>
  );
};

export default CommonHeader;