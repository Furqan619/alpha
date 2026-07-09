import styled from 'styled-components';

const StyledSideNavigation = styled.section`
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  
  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 15px;

      a {
        text-decoration: none;
        color: #333;
        font-weight: bold;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;

export default StyledSideNavigation;