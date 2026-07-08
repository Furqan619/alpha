import { Button, Flex, message } from "antd";
import { useNavigate } from "react-router-dom";
import PATH from "../../Routes/Paths";
import StyledCommonHeader from "./StyledCommonHeader"
import { PNG_IMAGES } from "../../Routes/assets/constant";
import { HEADER_MENU } from "./constant";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import MainHeader from "./MainHeader";
import MobileHeader from "./MobileHeader";


const CommonHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, [auth]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <StyledCommonHeader>
      {isMobile ? (
        <MobileHeader
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      ) : (
        <MainHeader
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      )}
    </StyledCommonHeader>
  );
};

export default CommonHeader;