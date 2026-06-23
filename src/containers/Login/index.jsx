
import auth from "../../services/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AppWrapperHOC from "../CommonHOC/AppWrapperHOC";
import { useState } from 'react';
import StyledLogin from './StyledLogin';
import PATH from "../../Routes/Paths";

const Login = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
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
			navigate(PATH.JOBS);
			if (onSubmit) {
				onSubmit({ user, username, phone });
			}
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<StyledLogin>
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
				<button type="submit" className="primary-btn">Sign in</button>
			</form>
		</StyledLogin>
	);
};

export default AppWrapperHOC(Login);
