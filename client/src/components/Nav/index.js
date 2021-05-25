import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { CURRENT_PAGE, PREVIOUS_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

const Nav = () => {
	// import the global state and dispatch
    const [state, dispatch] = useStoreContext();
    // extract currentPage from the state object
    const { currentPage } = state;

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
		event.preventDefault();
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
		event.preventDefault();
		dispatch({
			type: CURRENT_PAGE,
			currentPage: 'home'
		  })
	}

	return (
		<header>
				<h3>
				<p onClick={home} className='title-nav'>Taroble Cards</p>
				</h3>
				{Auth.loggedIn() ? (
					<>
						<ul>
							{currentPage === 'dashboard' ? (
								<li>
									<p onClick={home} className="signup-login">GET ANOTHER READING</p>
								</li>
							) : (
								<li>
									<p onClick={dashboard} className="signup-login">DASHBOARD</p>
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
