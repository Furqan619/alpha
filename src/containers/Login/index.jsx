
import auth from "../../services/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import StyledLogin from './StyledLogin';
import PATH from "../../Routes/Paths";
import { PNG_IMAGES } from "../../Routes/assets/constant";

const Login = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
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
				console.error('Error fetching user profile:', e);
			}
			alert("Login successful!");
			setEmail('');
			setPassword('');
			navigate(PATH.PROFILE);
			if (onSubmit) {
				onSubmit({ user, username, phone });
			}
		} catch (error) {
			alert(error.message);
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
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<div>
					<a href={PATH.FORGOT_PASSWORD}>Forgot Password?</a>
				</div>
					<button type="submit" className="primary-btn">Sign in</button>
				<p>Don't have an account? <a href={PATH.SIGNUP}>Sign up</a></p>
				
			</form>
		</StyledLogin>
	);
};

export default Login;
