import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../services/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import StyledSignUp from './StyledSignUp';
import PATH from "../../Routes/Paths";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      // console.log("User created:", userCredential.user);
      alert("Registration successful!");
      setEmail("");
      setPassword("");
      navigate(PATH.LOGIN);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <StyledSignUp>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </StyledSignUp>
  );
};

export default SignUp;