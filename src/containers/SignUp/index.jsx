import { useState } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../services/firestore";
import { doc, setDoc } from "firebase/firestore";
import auth from "../../services/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import StyledSignUp from './StyledSignUp';
import PATH from "../../Routes/Paths";
import { PNG_IMAGES } from "../../Routes/assets/constant";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
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

        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          username,
          phone,
          email,
          createdAt: new Date()
        });

      // console.log("User created:", userCredential.user);
      alert("Registration successful!");
      setUsername("");
      setPhone("");
      setEmail("");
      setPassword("");
      navigate(PATH.LOGIN);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <StyledSignUp>
      <div className="logo">
				<a href={PATH.HOME}>
					<img src={PNG_IMAGES.ALPHA_LOGO.URL} alt={PNG_IMAGES.ALPHA_LOGO.ALT} />
				</a>
			</div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
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