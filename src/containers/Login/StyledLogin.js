import styled from 'styled-components';

const StyledLogin = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 6px;
  h2{
    margin-bottom: 20px;
  }
  form{
    div{
      margin-bottom: 12px;
      label{
        display: block;
        margin-bottom: 6px;
      }
      input{
        width: 100%;
        padding: 8px;
      }
    }
  }
`;

export default StyledLogin;