import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import sweets from "../pages/images/track.jpg";
import icon1 from "../pages/images/icon1.png";
import icon2 from "../pages/images/icon2.png";
import icon3 from "../pages/images/icon3.png";
import "./Main.css";

export default function Lebensmittel() {
  return (
    <div>
      <Navbar />
      <Banner title="Lebensmittel" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col-md-5 text-center">
            <img
              src={sweets}
              className="noframe"
              alt="Sweets"
              width="450"
              height="550"
            />
          </div>
          <div className="col-md-5">
            <h2>Sugary - leicht und selbstbewusst unterwegs...</h2>
            <p>
              Sugary ist von Menschen mit Diabetes für Menschen mit Diabetes. In
              der Sugary App findest du all deine wichtigen Diabetes-Daten,
              Integrationen und manuelle Einträge, bequem an einem Ort.
            </p>
            <p>
              Die Sugary App steht dir in deinem Diabetes-Alltag jederzeit zur
              Seite und hilft dir dabei, motiviert und selbstbewusst dein
              Monster zu zähmen!
            </p>
            <h2>Sugary - du brauchst sie einfach!</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. At vero eos et accusam et
              justo duo dolores et ea rebum.
            </p>
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
