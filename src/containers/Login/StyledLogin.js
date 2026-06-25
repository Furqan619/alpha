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

export default StyledLogin;