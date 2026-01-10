import { useState } from 'react';
import '../styles/Signup.css';
import API_URL from '../api';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const validateEmail = (value) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	};

	const handleEmailChange = (e) => {
		const value = e.target.value;
		setEmail(value);
		if (value && !validateEmail(value)) {
			setEmailError('Please enter a valid email address');
		} else {
			setEmailError('');
		}
	};

	const handlePasswordChange = (e) => {
		const value = e.target.value;
		setPassword(value);
		if (value.length < 6) {
			setPasswordError('Password must be at least 6 characters');
		} else {
			setPasswordError('');
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setEmailError('Please enter a valid email address');
			return;
		}
		if (password.length < 6) {
			setPasswordError('Password must be at least 6 characters');
			return;
		}

		try {
			const res = await fetch(`${API_URL}/auth/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();
			if (!res.ok) {
				console.error('Login failed:', data);
			} else {
				console.log('Login success:', data);
                localStorage.setItem("token", data.token);
			}
            

		} catch (err) {
			console.error('Login error', err);
		}
	};

	return (
		<div className="signup-container">
			<div className="signup-form-wrapper">
				<h1 className="signup-heading">Log In</h1>

				<form onSubmit={handleLogin} className="signup-form">
					<div className="form-columns">
						<div className="form-column">
							<div className="form-group">
								<label htmlFor="email" className="form-label">Email</label>
								<input
									type="email"
									id="email"
									placeholder="Enter your email"
									value={email}
									onChange={handleEmailChange}
									className={`form-input ${emailError ? 'input-error' : ''}`}
								/>
								{emailError && <span className="error-message">{emailError}</span>}
							</div>
						</div>

						<div className="form-column">
							<div className="form-group">
								<label htmlFor="password" className="form-label">Password</label>
								<div className="password-input-wrapper">
									<input
										type={showPassword ? 'text' : 'password'}
										id="password"
										placeholder="Enter your password"
										value={password}
										onChange={handlePasswordChange}
										className={`form-input ${passwordError ? 'input-error' : ''}`}
									/>
									<button
										type="button"
										className="toggle-password-btn"
										onClick={() => setShowPassword(!showPassword)}
										title={showPassword ? 'Hide password' : 'Show password'}
									>
										{showPassword ? '👁️' : '👁️‍🗨️'}
									</button>
								</div>
								{passwordError && <span className="error-message">{passwordError}</span>}
							</div>
						</div>
					</div>

					<button type="submit" className="signup-button">Log In</button>
				</form>
			</div>
		</div>
	);
}

