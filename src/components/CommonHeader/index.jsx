import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import PATH from "../../Routes/Paths";
import StyledCommonHeader from "./StyledCommonHeader"
import { PNG_IMAGES } from "../../Routes/assets/constant";
import { HEADER_MENU } from "./constant";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


const CommonHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, [auth]);

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
          {isLoggedIn ? (
            <Button onClick={handleLogout} className="primary-btn">Sign out</Button>
          ) : (
            <Button href={PATH.LOGIN} className="primary-btn">Sign in</Button>
          )}
        </div>
      </div>
    </StyledCommonHeader>
  )
}

export default CommonHeader;