import React from 'react'

const Footer = () => {

    const footerDate = new Date().getFullYear()

    return (
        <footer>
            <div className="logo-container">
                {/* Logo image goes here */}
                {/* <img src="" alt="" /> */}
            </div>
            <div className="footer-info">
                <p>Created by J Scott Rumptz, Joel Cox, Meaghan Campbell, Taylor Gentry, and Ebenezer kankam</p>
                <span className="copyright">&copy; {footerDate} | All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
