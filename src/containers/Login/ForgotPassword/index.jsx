import { StyledForgotPassword } from "../StyledLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../../services/auth";
import PATH from "../../../Routes/Paths";
import { PNG_IMAGES } from "../../../Routes/assets/constant";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);

      alert("Password reset email sent successfully. Please check your email.");

      setEmail("");

      // Redirect to Login page after 2 seconds
      setTimeout(() => {
        navigate(PATH.LOGIN);
      }, 2000);

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledForgotPassword>
      
    <div className="card">
      <div className="logo">
				<a href={PATH.HOME}>
					<img src={PNG_IMAGES.ALPHA_LOGO.URL} alt={PNG_IMAGES.ALPHA_LOGO.ALT} />
				</a>
			</div>
      <h2>Forgot Password</h2>

      <form onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
    </StyledForgotPassword>
  );
};

export default ForgotPassword;