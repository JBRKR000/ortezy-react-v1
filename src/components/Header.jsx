import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Header = () => {
    return (
        <header className="masthead">
            <div className="container px-10 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-4 text-uppercase">Ortezy</h1>
                        <h2 className="text-white-100 text-uppercase mx-auto mt-10 mb-5 mw-100">Zdrowie w twoich rękach: Jak prawidłowo zakładać ortezy?</h2>
                        <a className="btn btn-primary" href="#about">Dowiedz się więcej</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
