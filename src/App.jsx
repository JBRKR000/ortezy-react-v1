import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import RodzajeOrtezPage from "./pages/RodzajeOrtezPage";
import KontaktPage from "./pages/KontaktPage";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/rodzaje-ortez" element={<RodzajeOrtezPage/>}/>
            <Route path="/kontakt" element={<KontaktPage/>}/>
            <Route path="*" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
