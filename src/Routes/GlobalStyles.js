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
`;

export default GlobalStyles;