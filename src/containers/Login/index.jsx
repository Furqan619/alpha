
import { useState } from 'react';
import StyledLogin from './StyledLogin';

const Login = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (onSubmit) onSubmit({ email, password });
    console.log('Login submitted:', { email, password });
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

export default Login;
