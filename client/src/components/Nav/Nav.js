import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Taroble Cards</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">SignUp</Link>
                </li>
            </ul>
        </header>
    )
}

export default Nav
