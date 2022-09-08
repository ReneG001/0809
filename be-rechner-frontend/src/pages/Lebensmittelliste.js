import React from "react";
import { Link } from "react-router-dom";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Lists from "../components/Lists.js";
import "./Main.css";

export default function LebensmittelListe() {
  return (
    <div>
      <Navbar />
      <Banner title="Meine Lebensmittelliste" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col lebensmittelliste">
            <Lists />
          </div>
        </div>
      </div>
      <Prefooter />
      <Footer />
    </div>
  );
}
