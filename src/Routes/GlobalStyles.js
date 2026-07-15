import { createGlobalStyle } from "styled-components";
import theme from "./assets/theme";

const GlobalStyles = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  .pad-1{
    padding: 10px !important;
  }
  .pad-2{
    padding: 20px !important;
  }
  .pad-3{
    padding: 30px !important;
  }
  .pad-4{
    padding: 40px !important;
  }
  .pad-5{
    padding: 50px !important;
  }
  .pad-t-1{
    padding-top: 10px !important;
  }
  .pad-t-2{
    padding-top: 20px !important;
  }
  .pad-t-3{
    padding-top: 30px !important;
  }
  .pad-t-4{
    padding-top: 40px !important;
  }
  .pad-t-5{
    padding-top: 50px !important;
  }
  .pad-b-1{
    padding-bottom: 10px !important;
  }
  .pad-b-2{
    padding-bottom: 20px !important;
  }
  .pad-b-3{
    padding-bottom: 30px !important;
  }
  .pad-b-4{
    padding-bottom: 40px !important;
  }
  .pad-b-5{
    padding-bottom: 50px !important;
  }
  .pad-l-1{
    padding-left: 10px !important;
  }
  .pad-l-2{
    padding-left: 20px !important;
  }
  .pad-l-3{
    padding-left: 30px !important;
  }
  .pad-l-4{
    padding-left: 40px !important;
  }
  .pad-l-5{
    padding-left: 50px !important;
  }
  .pad-r-1{
    padding-right: 10px !important;
  }
  .pad-r-2{
    padding-right: 20px !important;
  }
  .pad-r-3{
    padding-right: 30px !important;
  }
  .pad-r-4{
    padding-right: 40px !important;
  }
  .pad-r-5{
    padding-right: 50px !important;
  }
  .mar-1{
    margin: 10px !important;
  }
  .mar-2{
    margin: 20px !important;
  }
  .mar-3{
    margin: 30px !important;
  }
  .mar-4{
    margin: 40px !important;
  }
  .mar-5{
    margin: 50px !important;
  }
  .mar-t-1{
    margin-top: 10px !important;
  }
  .mar-t-2{
    margin-top: 20px !important;
  }
  .mar-t-3{
    margin-top: 30px !important;
  }
  .mar-t-4{
    margin-top: 40px !important;
  }
  .mar-t-5{
    margin-top: 50px !important;
  }
  .mar-b-1{
    margin-bottom: 10px !important;
  }
  .mar-b-2{
    margin-bottom: 20px !important;
  }
  .mar-b-3{
    margin-bottom: 30px !important;
  }
  .mar-b-4{
    margin-bottom: 40px !important;
  }
  .mar-b-5{
    margin-bottom: 50px !important;
  }
  .mar-l-1{
    margin-left: 10px !important;
  }
  .mar-l-2{
    margin-left: 20px !important;
  }
  .mar-l-3{
    margin-left: 30px !important;
  }
  .mar-l-4{
    margin-left: 40px !important;
  }
  .mar-l-5{
    margin-left: 50px !important;
  }
  .mar-r-1{
    margin-right: 10px !important;
  }
  .mar-r-2{
    margin-right: 20px !important;
  }
  .mar-r-3{
    margin-right: 30px !important;
  }
  .mar-r-4{
    margin-right: 40px !important;
  }
  .mar-r-5{
    margin-right: 50px !important;
  }
  .primary-button {
    background: linear-gradient(135deg, #7B56F6 0%, #5A30D7 50%, #5e41c5 100%);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      font-weight: 600;
    }
  }
  .mobile-menu-body {
    .header-menu {
      display: flex;
      flex-direction: column;
      gap: 16px;
      list-style: none;
      li {
        a {
          font-size: 18px;
        }
      }
    }
    .header-menu{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      list-style: none;
      gap: 16px;
      li {
        cursor: pointer;
        a {
          text-decoration: none;
          color: rgba(17,24,39,0.85);
          position: relative;
          padding: 4px 0;
          transition: color 180ms ease, transform 180ms ease;
          &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, ${theme.secondary}, ${theme.primary});
            border-radius: 3px;
            transition: width 220ms ease;
          }
          &:hover {
            color: #111827;
            transform: translateY(-3px);
          }
          &:hover:after {
            width: 100%;
          }
        }
      }
    }
  }
`;

export default GlobalStyles;