import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
                <h3>
                    <Link to="/" className='title'>Taroble Cards</Link>
                </h3>
            <ul>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
                <li>
                    <Link to="/signup">SIGN UP</Link>
                </li>
            </ul>
        </header>
    )
}

export default Nav
