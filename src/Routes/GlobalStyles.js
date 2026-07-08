import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  .primary-btn{
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
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
      list-style: none;
      gap: 28px;
      align-items: center;
      margin: 0;
      padding: 0;
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