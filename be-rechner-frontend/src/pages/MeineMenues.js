import React from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import { Link } from "react-router-dom";
import icon1 from "../pages/images/icon1.png";
import icon2 from "../pages/images/icon2.png";
import icon3 from "../pages/images/icon3.png";
import "./Main.css";

export default function MeineMenues() {
  return (
    <div>
      <Navbar />
      <Banner title="Meine Menüs" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col-md-5">
            <h2>Kannste füllen</h2>
          </div>
          <div className="col-md-5">
            <h2>Kannste füllen</h2>
          </div>
          <div className="col-md-2 thesidebar">
            <Link className="nav-link" to="/lebensmittelliste">
              <img
                src={icon3}
                className="icon"
                alt="Hinzufügen"
                width="150"
                height="100"
              />
              Lebensmittel auswählen
            </Link>
            <hr />
            <Link className="nav-link" to="/meinemenues">
              <img
                src={icon1}
                className="icon"
                alt="Hinzufügen"
                width="150"
                height="100"
              />
              Meine Menüs
            </Link>
            <hr />
            <Link className="nav-link" to="/lebensmittelhinzu">
              <img
                src={icon2}
                className="icon"
                alt="Hinzufügen"
                width="150"
                height="100"
              />
              Hinzufügen
            </Link>
          </div>
        </div>
      </div>
<Prefooter />
      <Footer />
    </div>
  );
}
