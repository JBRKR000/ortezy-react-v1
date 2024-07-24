import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import RodzajeOrtezPage from "./pages/RodzajeOrtezPage";
import KontaktPage from "./pages/KontaktPage";
import FAQ from "./components/FAQ";
import FaqPage from "./pages/FaqPage";
import PrivacyAndTerms from "./pages/PrivacyAndTerms";
import AboutUs from "./pages/AboutUs";


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/rodzaje-ortez" element={<RodzajeOrtezPage/>}/>
            <Route path="/kontakt" element={<KontaktPage/>}/>
            <Route path="/faq" element={<FaqPage/>} />
            <Route path="/privacy-and-terms" element={<PrivacyAndTerms/>} />
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="*" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
