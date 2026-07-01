import styled from 'styled-components';

const StyledLogin = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img {
    display: block;
    margin: 0 auto 20px;
    max-width: 150px;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 15px;

      label {
        display: block;
        margin-bottom: 5px;
      }

      input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
      }
    }

    .primary-btn {
      background-color: #007bff;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
    p{
      font-size: 14px;
      margin: 10px 0;
      text-align: center;
    }
    a {
      color: #007bff;
      text-decoration: none;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

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

export { StyledLogin, StyledForgotPassword };