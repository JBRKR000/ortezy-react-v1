import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsOfUse from "../components/TermsOfUse";


const PrivacyAndTerms = () => {
    return (
        <>
            <Navbar/>
            <br/>
            <br/>
            <PrivacyPolicy/>
            <TermsOfUse/>
            <br/>
            <br/>
            <Footer/>
        </>
    );
}

export default PrivacyAndTerms;
