import React from 'react';
import { Link } from 'react-router-dom';
import Reading from '../../lib/Reading'
import Auth from '../../utils/auth';
import { CURRENT_PAGE, PREVIOUS_PAGE, CURRENT_READING } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

const Nav = () => {
	// import the global state and dispatch
    const [state, dispatch] = useStoreContext();
    // extract currentPage from the state object
    const { currentPage, previousPage } = state;

	// generate a new reading and save it to the currentReading in global state
	const getReading = () => {
		
		dispatch({
			type: CURRENT_READING,
			// generate a new reading and save it to the currentReading in global state
			currentReading: Reading.generateReading()
		})

		dispatch({
			type: CURRENT_PAGE,
			// send user to messages component
			currentPage: 'messages'
		})
	}

	const logout = event => {
		event.preventDefault();
		Auth.logout();
	};

	const login = event => {
		event.preventDefault();
		dispatch({
			type: PREVIOUS_PAGE,
			previousPage: currentPage
		})

		dispatch({
			type: CURRENT_PAGE,
			currentPage: 'login'
		})
	}

	const dashboard = event => {
		
		dispatch({
			type: CURRENT_PAGE,
			currentPage: 'dashboard'
		})
	}

	const signUp = event => {
		event.preventDefault();
		dispatch({
			type: PREVIOUS_PAGE,
			previousPage: currentPage
		})
		dispatch({
			type: CURRENT_PAGE,
			currentPage: 'signUp'
		})
	}

	const home = event => {
		dispatch({
			type: CURRENT_PAGE,
			currentPage: 'home'
		})
	}

	return (
		<header>
			{currentPage !== 'home' ? (
				<h3>
				<Link to="/" onClick={home} className='title-nav'>Taroble Cards</Link>
				</h3>
			): (<h3> </h3>)}

				{Auth.loggedIn() ? (
					<>
						<ul>
							{currentPage === 'dashboard' || (currentPage === 'detail' && previousPage === 'dashboard') ? (
								<li>
									<Link to="/" onClick={getReading} className="signup-login">NEW READING</Link>
								</li>
							) : (
								<li>
									<Link to="/dashboard" onClick={dashboard} className="signup-login">DASHBOARD</Link>
								</li>
							)}
							<li>
								<Link to="/" onClick={logout} className="signup-login">
									LOGOUT
                </Link>
							</li>
						</ul>
					</>
				) : (
					<>
						<ul>
							<li>
								<p onClick={login} className='signup-login'>LOGIN</p>
							</li>
							<li>
								<p onClick={signUp} className='signup-login'>SIGNUP</p>
							</li>
						</ul>
					</>
				)}
		</header>
	)
}

export default Nav;
