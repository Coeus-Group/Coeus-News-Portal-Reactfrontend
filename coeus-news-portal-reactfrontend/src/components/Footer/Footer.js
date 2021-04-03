import React from 'react'
import './Footer.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <footer className="footer-all bg-dark">
            <p className="float-end"><a >Back to top</a></p>
            <p>&copy; 2021 Company, Inc. &middot; <a >Privacy</a> &middot; <a >Terms</a>
            </p>
        </footer>
    );
}

export default Footer;