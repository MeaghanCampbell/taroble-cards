import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';

import { CURRENT_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

import Auth from '../../utils/auth';

const SignUp = () => {
	// import the global state and dispatch
	const [state, dispatch] = useStoreContext();
	// extract previousPage from the state object
	const { previousPage } = state;
	
	const [formState, setFormState] = useState({ email: '', password: '' });

	const [addUser, { error }] = useMutation(ADD_USER);

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
			const { data } = await addUser({
				variables: { ...formState }
			});

			Auth.login(data.addUser.token)
			dispatch({
				type: CURRENT_PAGE,
				currentPage: previousPage
			})
	
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
			{error && <div>Sign up failed</div>}
		</div>
	)
}

export default SignUp
