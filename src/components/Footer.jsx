import React from 'react';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer bg-black small text-center text-white-50">
            <div className="container px-4 px-lg-5">
                <p>&copy; {
                    new Date().getFullYear()
                } Created by <strong>pro-link.pl</strong>. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
