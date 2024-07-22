import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";
import ContactBody from "../components/ContactBody";

const KontaktPage = () => {
    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <ContactBody />
            <br/>
            <br/>
            <Footer />
        </>
    );
}

export default KontaktPage;
