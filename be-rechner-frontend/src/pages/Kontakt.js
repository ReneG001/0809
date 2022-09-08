import React from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import heroes from "../pages/images/heroes.jpg";

export default function Kontakt() {
  return (
    <div>
      <Navbar />
      <Banner title="Kontakt" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col-md-6">
            <img src={heroes} alt="Lolli" width="420" height="420" />
          </div>
          <div className="col-md-6">
            <h2>Sugary Heroes - bei Diabetis stets an deiner Seite...</h2>
            <p>
              <a href="https://github.com/PhilRichert">Philip</a> | <a href="https://github.com/ReneG001" >René</a> | <a href="https://github.com/romanomantek">Romano</a>
            </p>
            <hr />
            <h2>Legal Informations</h2>
            <p>
              Das ist ein Entwickler-Projekt und wir waren zu faul sämtliche
              Urheberquellen zu notieren. Bei Fragen: nicht fragen.
            </p>
          </div>
        </div>
      </div>
<Prefooter />
      <Footer />
    </div>
  );
}
