import React from 'react'
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'

const Nav = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
      

    return (
        <header>
                <h3>
                    <Link to="/" className='title-nav'>Taroble Cards</Link>
                </h3>
            {Auth.loggedIn() ? (
                <>
                <ul>
                    <li>
                        <Link to="/dashboard" className="signup-login">DASHBOARD</Link>
                    </li>
                    <li>
                        <a href="/" onClick={logout} className="signup-login">
                            LOGOUT
                        </a>
                    </li>
                </ul>
                </>
            ) : (
                <>
                <ul>
                    <li>
                        <Link to="/login" className='signup-login'>LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/signup" className='signup-login'>SIGNUP</Link>
                    </li>
                </ul>
                </>
            )}
        </header>
    )
}

export default Nav
