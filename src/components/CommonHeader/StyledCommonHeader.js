import styled from "styled-components";
import theme from "../../Routes/assets/theme";

const StyledCommonHeader = styled.section`
.common-header {
  width: 100%;
  padding: 1em 6em;
  background: rgba(255,255,255,0.95);
  color: #111827;
  box-shadow: 0 8px 30px rgba(16,24,40,0.08), inset 0 1px 0 rgba(255,255,255,0.6);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(15,23,42,0.08);

  .header-logo {
    .header-logo-img{
      width: 150px;
      height: auto;
    }
    .brand-title {
      display: flex;
      flex-direction: column;
      line-height: 1;
      .name {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.6px;
        color: #111827;
      }
      .tag {
        font-size: 12px;
        color: rgba(17,24,39,0.65);
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

  .actions {
    display: flex;
    gap: 12px;
    align-items: center;
    .btn {
      background: linear-gradient(90deg, ${theme.secondary}, ${theme.primary});
      color: ${theme.white};
      padding: 10px 16px;
      border-radius: 10px;
      font-weight: 700;
      border: none;
      cursor: pointer;
      box-shadow: 0 6px 18px rgba(30,64,175,0.18);
      transition: transform 150ms ease, box-shadow 150ms ease;
      &:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(30,64,175,0.25); }
    }
  }
}
`;

export default StyledCommonHeader;