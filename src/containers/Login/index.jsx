
import auth from "../../services/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import { StyledLogin } from './StyledLogin';
import PATH from "../../Routes/Paths";
import { PNG_IMAGES } from "../../Routes/assets/constant";
import { Input, message, Button } from "antd";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../Routes/assets/utils";

const Login = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!EMAIL_REGEX.test(email)) {
			message.error("Please enter a valid email address.");
			return;
		}
		if (!PASSWORD_REGEX.test(password)) {
			message.error("Please enter a valid password. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.");
			return;
		}
		try {
			await setPersistence(auth, browserSessionPersistence);
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			sessionStorage.setItem("activeSession", "true");
			const user = userCredential.user;

			// fetch additional user data from Firestore (username, phone)
			const db = getFirestore();
			let username = null;
			let phone = null;
			try {
				const userDoc = await getDoc(doc(db, 'users', user.uid));
				if (userDoc.exists()) {
					const data = userDoc.data();
					username = data.username || null;
					phone = data.phone || null;
				}
			} catch (e) {
				message.warning(
					"Logged in, but failed to fetch user profile."
				);
			}
			message.success("Login successful!");
			setEmail('');
			setPassword('');
			navigate(PATH.PROFILE);
			if (onSubmit) {
				onSubmit({ user, username, phone });
			}
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				message.error("User not found. Please check your email.");
			} else if (error.code === 'auth/wrong-password') {
				message.error("Incorrect password. Please try again.");
			} else {
				message.error("Login failed. Please try again.");
			}
		}
	};

	return (
		<StyledLogin>
			<div>
				<a href={PATH.HOME}>
					<img src={PNG_IMAGES.ALPHA_LOGO.URL} alt={PNG_IMAGES.ALPHA_LOGO.ALT} />
				</a>
			</div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
				<Input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					size="large"
				/>
				</div>
				<div>
				<Input.Password
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					size="large"
				/>
				</div>
				<div>
					<Link to={PATH.FORGOT_PASSWORD}>Forgot Password?</Link>
				</div>
				<Button type="primary" htmlType="submit" size="large" className="primary-button">
					Login
				</Button>
				<p>Don't have an account? <Link to={PATH.SIGNUP}>Sign up</Link></p>
			</form>
		</StyledLogin>
	);
};

export default Login;
