import React, { useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to="/" className="navbar-brand">Ortezy</Link>
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link to="/" className="nav-link">Strona główna</Link></li>
                        <li className="nav-item"><Link to="/kontakt" className="nav-link" href="#">Kontakt</Link></li>
                        <li className="nav-item"><Link to="/faq" className="nav-link" href="#">FAQ</Link></li>
                        <li className="nav-item"><Link to="/about-us" className="nav-link" href="#">O nas</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
