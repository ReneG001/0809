import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import axios from "axios";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import infocircle from "../pages/images/info-circle.png";
import "./Main.css";

export default function NewEntry() {
  const [loading, setLoading] = useState(true);
  const [allentrys, setAllEntrys] = useState([]);
  const [currentsettings, setCurrentSettings] = useState([]);

  const getData2 = function () {
    const options2 = {
      url: "https://sugarlybackend.herokuapp.com/settings",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options2).then((response) => {
      if (!currentsettings) {
        return null;
      } else if (currentsettings !== response.data) {
        setCurrentSettings(response.data);
        setLoading(false);
      }
    });
  };

  const options = {
    url: "https://sugarlybackend.herokuapp.com/entrys/add",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };

  const getData = function () {
    axios(options).then((response) => {
      if (!allentrys) {
        return null;
      } else if (allentrys !== response.data) {
        setAllEntrys(response.data);
      }
    });
    getData2();
  };

  useEffect(() => getData(), []);

  if (loading) {
    return (
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  const einstellungen = currentsettings.filter((e) => e.id === 1);

  function findmahlzeit(mahlzeit) {
    const mahlzeiten = allentrys.filter((e) => mahlzeit === e.mahlzeit);
    console.log(mahlzeiten);
    if (!mahlzeiten) {
      return null;
    }

    // const gesamt_be = mahlzeiten.filter((element) => element.kohlenhydrate);
    // if (!mahlzeiten2) {
    //   return null;
    // }
    // setMahlzeiten2(mahlzeiten);
    // console.log(mahlzeiten2);

    return mahlzeiten.map((e) => (
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {e.name}
            <img src={infocircle} alt="Info" width="25" height="25" />
          </Accordion.Header>
          <Accordion.Body>
            <div>
              <table class="table table-hover watisdrin">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Menge (in g)</th>
                    <th scope="col">Brennwert (Kcal)</th>
                    <th scope="col">Fett</th>
                    <th scope="col">Kohlenhydrate</th>
                    <th scope="col">davon Zucker</th>
                    <th scope="col">Protein</th>
                    <th scope="col">Ballaststoffe</th>
                    <th scope="col">BE</th>
                    <th scope="col">KE</th>
                    <th scope="col">FPE</th>
                  </tr>
                </thead>
                <tbody>
                  <th scope="row">{e.menge}</th>
                  <td>{Math.round(e.brennwert)}</td>
                  <td>{Math.round(e.fett)}</td>
                  <td>{Math.round(e.kohlenhydrate)}</td>
                  <td>{Math.round(e.davonzucker)}</td>
                  <td>{Math.round(e.protein)}</td>
                  <td>{Math.round(e.ballaststoffe)}</td>
                  <td>{Math.round(e.kohlenhydrate / 12)}</td>
                  <td>{Math.round(e.kohlenhydrate / 10)}</td>
                  <td>
                    {Math.round((e.fett * 9) / 100 + (e.protein * 4) / 100)}
                  </td>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ));
  }

  const gesamt_berechnen = function (mahlzeit, zielwert, Faktor) {
    const mahlzeiten2 = allentrys.filter((e) => mahlzeit === e.mahlzeit);

    let gesamt = mahlzeiten2.reduce((total, item) => {
      return total + item.kohlenhydrate;
    }, 0);
    if (zielwert === "BE") {
      return (
        <div>
          <p className="be-ergebnis">
            {" "}
            <strong>Die gesamt {zielwert} betragen:</strong> {Math.round(gesamt / 12)}
            {" "} &nbsp; {" "}
            <strong>Für BE abzugebenes Insulin:</strong> {Math.round((gesamt / 12) * Faktor)} IE{" "}
          </p>
        </div>
      );
    } else if (zielwert === "KE") {
      return (
        <div>
          <p className="ke-ergebnis">
            {" "}
           <strong>Die gesamt {zielwert} betragen:</strong> {Math.round(gesamt / 10)}
           {" "} &nbsp; {" "}
           <strong>Für KE abzugebenes Insulin: </strong>{Math.round((gesamt / 10) * Faktor)} IE{" "}
          </p>
        </div>
      );
    }
  };

  const gesamt_berechnen_FPE = function (mahlzeit, Faktor) {
    const mahlzeiten3 = allentrys.filter((e) => mahlzeit === e.mahlzeit);
    let gesamt_fett = mahlzeiten3.reduce((total, item) => {
      return total + item.fett;
    }, 0);
    let gesamt_protein = mahlzeiten3.reduce((total, item) => {
      return total + item.protein;
    }, 0);

    console.log(gesamt_fett, gesamt_protein);
    return (
      <div>
        <p className="fpe-ergebnis">
          <strong>Die gesamt FPE betragen:</strong>{" "}
          {Math.round((gesamt_fett * 9) / 100 + (gesamt_protein * 4) / 100)}
          {" "} &nbsp; {" "}
          <strong>Für FPE abzugebenes Insulin:</strong>{" "}
          {Math.round(
            ((gesamt_fett * 9) / 100 + (gesamt_protein * 4) / 100) * Faktor
          )}{" "}
          IE
        </p>
      </div>
    );
  };
  console.log(einstellungen);
  console.log(einstellungen[0].Faktor_morgens);
  return (
    <div>
      <Navbar />
      <Banner title="Meine Einträge" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col">
            
            <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
          <h2 className="h2-eintrag">Frühstück</h2>
            
          </Accordion.Header>
          <Accordion.Body>
          <div className="mahlzeit">
              <div>{findmahlzeit("Frühstück")}</div>
              <div className="ergebnis-eintrag">
                {gesamt_berechnen(
                  "Frühstück",
                  "BE",
                  einstellungen[0].Faktor_morgens
                )}
                {gesamt_berechnen(
                  "Frühstück",
                  "KE",
                  einstellungen[0].Faktor_morgens
                )}
                {gesamt_berechnen_FPE(
                  "Frühstück",
                  einstellungen[0].Faktor_morgens
                )}
              </div>
            </div>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
          <h2 className="h2-eintrag">Mittag</h2>
            
          </Accordion.Header>
          <Accordion.Body>
            <div className="mahlzeit">
              
              <div>{findmahlzeit("Mittagessen")}</div>
              <div className="ergebnis-eintrag">
                {gesamt_berechnen(
                  "Mittagessen",
                  "BE",
                  einstellungen[0].Faktor_mittags
                )}
                {gesamt_berechnen(
                  "Mittagessen",
                  "KE",
                  einstellungen[0].Faktor_mittags
                )}
                {gesamt_berechnen_FPE(
                  "Mittagessen",
                  einstellungen[0].Faktor_mittags
                )}
              </div>
            </div>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

            <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
          <h2 className="h2-eintrag">Abendessen</h2>
            
          </Accordion.Header>
          <Accordion.Body>
            <div className="mahlzeit">
              
              <div>{findmahlzeit("Abendbrot")}</div>
              <div className="ergebnis-eintrag">
                {gesamt_berechnen(
                  "Abendbrot",
                  "BE",
                  einstellungen[0].Faktor_abends
                )}
                {gesamt_berechnen(
                  "Abendbrot",
                  "KE",
                  einstellungen[0].Faktor_abends
                )}
                {gesamt_berechnen_FPE(
                  "Abendbrot",
                  einstellungen[0].Faktor_abends
                )}
              </div>
            </div>
</Accordion.Body>
        </Accordion.Item>
      </Accordion>

            <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
          <h2 className="h2-eintrag">Spätmahlzeit</h2>
            
          </Accordion.Header>
          <Accordion.Body>
            <div className="mahlzeit">
              
              <div>{findmahlzeit("Nachts")}</div>
              <div className="ergebnis-eintrag">
                {gesamt_berechnen(
                  "Nachts",
                  "BE",
                  einstellungen[0].Faktor_nachts
                )}
                {gesamt_berechnen(
                  "Nachts",
                  "KE",
                  einstellungen[0].Faktor_nachts
                )}
                {gesamt_berechnen_FPE("Nachts", einstellungen[0].Faktor_nachts)}
              </div>
            </div>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>
          </div>
        </div>
      </div>
      <Prefooter />
      <Footer />
    </div>
  );
}
