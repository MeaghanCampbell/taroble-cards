import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SignUp = () => {
	const [formState, setFormState] = useState({ email: '', password: '' });

	const [login, { error }] = useMutation(LOGIN_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// submit form
	const handleFormSubmit = async event => {
		event.preventDefault();

		try {
			const { data } = await login({
				variables: { ...formState }
			});
			// put token in local storage
			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div>
			<form className='login-signup-form' onSubmit={handleFormSubmit}>
				<div>
					<p className='form-header'>SIGN UP </p>
					<p className='form-header'>TO SAVE YOUR</p>
					<p className='form-header'>READINGS</p>
				</div>
				<div>
					<div>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="email"
							autoComplete="off"
							required
							value={formState.email}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div>
					<div>
						<input
							id="username"
							name="username"
							type="username"
							placeholder='username'
							autoComplete="off"
							value={formState.username}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div>
					<div>
						<input
							id="password"
							name="password"
							type="password"
							placeholder='password'
							autoComplete="off"
							value={formState.password}
							onChange={handleChange}
							required
						/>
					</div>
				</div>

				<div>
					<button className='sign-in-btn' type="submit">
						SIGN UP
          </button>
				</div>
			</form>
			{error && <div>Login failed</div>}
		</div>
	)
}

export default SignUp
