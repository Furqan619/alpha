import styled from 'styled-components';
import theme from '../../Routes/assets/theme';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  gap: 1rem;

  /* Responsive layout */
  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 1.5rem;
    max-width: 920px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    gap: 0.75rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    padding: 0.75rem;
  }
`;

export default Container;
