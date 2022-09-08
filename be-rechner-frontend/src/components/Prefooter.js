import React from "react";
import teaserbild1 from "../pages/images/teaser-icon1.jpg";
import teaserbild2 from "../pages/images/teaser-icon2.jpg";
import teaserbild3 from "../pages/images/teaser-icon3.jpg";
import "./Footer.css";

export default function Prefooter() {
  return (
    <div className="container-fluid mt-5">
      <div className="container teaser-boxen">
        <div className="row">
          <div className="col-md-4">
            <div className="teaserbox">
              <img src={teaserbild1} alt="alt" width="90" height="90" />
              <h4>Ernährungstipps</h4>
              <p>
                Wöchentlich und saisonal aktualisierte ideen zum Selbst- und
                Nachkochen.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="teaserbox">
              <img src={teaserbild2} alt="alt" width="90" height="90" />
              <h4>Community</h4>
              <p>
                Dort findest du hilfreiche Tipps und Neuigkeiten rund ums Thema
                Diabetis.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="teaserbox">
              <img src={teaserbild3} alt="alt" width="90" height="90" />
              <h4>Support</h4>
              <p>
                In den FAQ findest du alles, was dir eine optimale Nutzung der
                App ermöglicht.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
