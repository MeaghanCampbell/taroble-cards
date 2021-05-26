import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';

import { CURRENT_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

import Auth from '../../utils/auth';

const Login = (props) => {
  // import the global state and dispatch
	const [state, dispatch] = useStoreContext();
	// extract the previousPage from the state object
	const { previousPage } = state;

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
      dispatch({
        type: CURRENT_PAGE,
        // generate a new reading and save it to the currentReading in global state
        currentPage: previousPage
      })
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main>
      <form className='login-signup-form' onSubmit={handleFormSubmit}>
        <div>
          <p className='form-header'>LOGIN </p>
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

        {error && <div className='error'>login failed</div>}

				<div>
					<button className='sign-in-btn' type="submit">
						LOGIN
          </button>
				</div>
			</form>
		</main>
	)
}

export default Login;