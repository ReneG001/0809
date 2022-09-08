import React from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import lolli from "../pages/images/start.jpg";
import "./Main.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner title="Der Insulin-Rechner für Diabetiker" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={lolli} alt="Lolli" width="420" height="420" />
          </div>
          <div className="col-md-6">
            <h2>Wie viel Insulin gebe ich ab?</h2>
            <p>
              Wie berücksichtige ich die Glykämische Last? <br />
              Wie berechne ich Fett-Protein-Einheiten? <br /> Welche
              Lebensmittel kann ich idealerweise miteinander kombinieren?
            </p>
            <h2>Berechnet unkompliziert deine Mahlzeiten</h2>
            <p>
              Bessere Blutzuckerwerte durch genaueres berechnen. Berechnet die
              KE, BE, und FPE deiner Mahlzeiten anhand des Gewichts.
            </p>

            <h2>Speichere Mahlzeiten ab</h2>
            <p>
              Speichere Mahlzeiten und ihr Gewicht ab sodass du ständig darauf
              zugreifen kannst.
            </p>

            <h2>Füge eigene Lebensmittel hinzu</h2>
            <p>
              Füge Lebensmittel die nicht in der Datenbank vorhanden sind zu der
              Liste bereits vorhandener Lebensmittel hinzu.
            </p>
          </div>
        </div>
      </div>

      <Prefooter />
      <Footer />
    </div>
  );
}
