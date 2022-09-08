import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import icon1 from "../components/images/info-icon.png";
import icon2 from "../components/images/add-icon.png";
import "./Accordion.css";

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Apfel
          <Link to="/">
            <img
              className="xxx"
              src={icon1}
              alt="Info"
              width="35"
              height="35"
            />
          </Link>
          <img className="xxx" src={icon2} alt="Info" width="35" height="35" />
        </Accordion.Header>
        <Accordion.Body>
          <p>Tabelle, Digga</p>
          <p>&nbsp;</p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          Banane <Link to="/"> + </Link>
        </Accordion.Header>

        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
