import React from 'react';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer bg-black small text-center text-white-50">
            <div className="container px-4 px-lg-5">
                <div className="social-icons mb-3">
                    <a href="https://www.facebook.com/projektowaniewww"
                       target="https://www.facebook.com/projektowaniewww" rel="noopener noreferrer"
                       className="text-white mx-2">
                        <FontAwesomeIcon icon={faFacebook} size="2x"/>
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                        <FontAwesomeIcon icon={faXTwitter} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                       className="text-white mx-2">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a href="https://www.linkedin.com/company/pro-link-seo/"
                       target="https://www.linkedin.com/company/pro-link-seo/" rel="noopener noreferrer"
                       className="text-white mx-2">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>
                    <a href="https://www.pro-link.pl" target="pro-link.pl" rel="noopener noreferrer"
                       className="text-white mx-2">
                        <FontAwesomeIcon icon={faGlobe} size="2x"/>
                    </a>

                </div>
                <p>&copy; {new Date().getFullYear()} Created by <strong>pro-link.pl</strong>. All rights reserved.</p>
                <p>
                    <Link to="/privacy-and-terms" className="text-white">Polityka prywatności i Warunki użytkowania</Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
