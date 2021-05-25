import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';

import { CURRENT_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";
import Auth from '../../utils/auth';
import {validateEmail} from '../../utils/helpers'

const SignUp = () => {
	// import the global state and dispatch
	const [state, dispatch] = useStoreContext();
	// extract previousPage from the state object
	const { previousPage } = state;
	
	const [formState, setFormState] = useState({ username: '', email: '', password: '' });
	const {username, email, password} = formState
	const [errorMessage, setErrorMessage] = useState('')

	const [addUser, { error }] = useMutation(ADD_USER);

	// update state based on form input changes
	const handleChange = (event) => {

		if (event.target.name === 'email') {
			const isValid = validateEmail(event.target.value)

			if (!isValid) {
                setErrorMessage('Your email is invalid')
			} else {
				setErrorMessage('')
			}
		} else {
			if (!event.target.value.length) {
				setErrorMessage(`${event.target.name} is required`)
			} else {
				setErrorMessage('')
			}
		}

        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
        }
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
							// value={formState.email}
							defaultValue={email}
							onBlur={handleChange}
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
							// value={formState.username}
							defaultValue={username}
							onBlur={handleChange}
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
							// value={formState.password}
							defaultValue={password}
							onBlur={handleChange}
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
			{errorMessage && (
				<div className="signup-login">{errorMessage}</div>
			)}
		</div>
	)
}

export default SignUp
