import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import CzymJestOrteza from '../components/CzymJestOrteza';
import PoCoStosujemy from '../components/PoCoStosujemy';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
    return (
        <>
            <Navbar />
            <Header />
            <CzymJestOrteza />
            <PoCoStosujemy />
            <br/>
            <Footer />
        </>
    );
}

export default MainPage;
