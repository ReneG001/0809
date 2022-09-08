import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";
import Home from "./pages/Home.js";
import NewEntry from "./pages/NewEntry.js";
import Lebensmittel from "./pages/Lebensmittel.js";
import LebensmittelListe from "./pages/Lebensmittelliste.js";
import MeineMenues from "./pages/MeineMenues.js";
import LebensmittelHinzu from "./pages/Lebensmittelhinzu.js";
import Kontakt from "./pages/Kontakt.js";
 import Einstellungen from "./pages/Einstellungen.js";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newentry" element={<NewEntry />} />
        <Route path="/lebensmittel" element={<Lebensmittel />} />
        <Route path="/lebensmittelliste" element={<LebensmittelListe />} />
        <Route path="/meinemenues" element={<MeineMenues />} />
        <Route path="/lebensmittelhinzu" element={<LebensmittelHinzu />} />
        <Route path="/kontakt" element={<Kontakt />} />
       <Route path="/einstellungen" element={<Einstellungen />} /> 
      </Routes>
    </BrowserRouter>
  );
}
