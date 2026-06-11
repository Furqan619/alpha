import styled from "styled-components";
import theme from "../../Routes/assets/theme";

const StyledCommonHeader = styled.section`
.common-header {
  background-color: wheat;
  box-shadow: 5px 2px 1px ${theme.secondary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  .header-menu{
    display: flex;
    list-style: none;
    gap: 20px;
    align-items: center;
    li {
      cursor: pointer;
    }
  }
  .header-logo {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    .header-logo-img {
      width: 80%;
      height: 80%;
    }
  }
}
`;

export default StyledCommonHeader;