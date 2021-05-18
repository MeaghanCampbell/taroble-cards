import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Login = (props) => {
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
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="email">
                                Email address
                            </label>
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    autoComplete="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password">
                                password
                            </label>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='******'
                                    autoComplete="current-password"
                                    value={formState.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    {error && <div>Login failed</div>}
                </div>
    )
}

export default Login;