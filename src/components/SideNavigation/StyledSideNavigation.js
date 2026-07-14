import styled from 'styled-components';

const StyledSideNavigation = styled.section`
  width: 280px;
  background: linear-gradient(180deg, #ffffff 0%, #e9f2ff 100%);
  padding: 20px;
  box-shadow: 0 6px 18px rgba(20, 40, 80, 0.12), 0 2px 6px rgba(20, 40, 80, 0.06);
  border-radius: 12px;
  box-sizing: border-box;
  /* let the card size to its content but never exceed the viewport to avoid page scroll */
  min-height: calc(100vh - 40px);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  .side-nav-button {
    align-self: center;
    margin-top: auto;
    width: 100%;
    background: #ca521a;
    border: none;
    color: #ffffff;
    font-weight: 600;
    &:hover {
      background: #ff2f2f !important;
      color: #ffffff;
    }
  }
  .side-nav-link {
    text-decoration: none;
    color: #1f2d3d;
    padding: 10px 12px;
    border-radius: 8px;
    transition: background 160ms ease, color 160ms ease, transform 120ms ease;

    &:hover {
      color: #ff2f2f;
      font-weight: 600;
      transform: translateX(4px);
    }
    &.active {
      color: #ffffff;
      background: #ca521a;
      font-weight: 600;
    }
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 12px;

      a {
        display: block;
        padding: 10px 12px;
        border-radius: 8px;
        text-decoration: none;
        color: #1f2d3d;
        font-weight: 600;
        background: transparent;
        transition: background 160ms ease, color 160ms ease, transform 120ms ease;

        &:hover {
          color: #ffffff;
          background: #1976d2;
          transform: translateX(4px);
        }
      }
    }
  }
`;

export default StyledSideNavigation;