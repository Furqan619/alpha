import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, message } from 'antd';
import PATH from "../../Routes/Paths";
import StyledSideNavigation from './StyledSideNavigation';
import { getAuth, signOut } from "firebase/auth";

const SideNavigation = () => {
  const auth = getAuth();
  const navigate = useNavigate();

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
    <StyledSideNavigation>
      <nav className="side-navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </StyledSideNavigation>
  );
};

export default SideNavigation;