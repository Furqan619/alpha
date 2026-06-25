import styled from 'styled-components';

const StyledForgotPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f2f5;

  .card {
    background: #fff;
    padding: 32px 28px;
    border-radius: 12px;
    border: 1px solid rgba(0,0,0,0.08);
    box-shadow: 0 6px 18px rgba(0,0,0,0.06);
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  h2 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    
    input {
      margin-bottom: 15px;
      padding: 10px;
      font-size: 16px;
      border: 1px solid #d9dfe6;
      border-radius: 6px;
      background: #fff;
    }

    button {
      padding: 10px;
      font-size: 16px;
      background-color: #007BFF;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 6px;
      transition: background-color 0.15s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

export default StyledForgotPassword;