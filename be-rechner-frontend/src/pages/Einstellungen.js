import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Prefooter from "../components/Prefooter.js";
import lolli from "../pages/images/diabetes-2.jpg";

export default function Einstellungen() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(0);
  const [title2, setTitle2] = useState(0);
  const [title3, setTitle3] = useState(0);
  const [title4, setTitle4] = useState(0);
  const [currentsettings, setCurrentSettings] = useState([]);

  console.log(title, title2, title3, title4);

  const getData = function () {
    const options = {
      url: "https://sugarlybackend.herokuapp.com/settings",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options).then((response) => {
      if (!currentsettings) {
        return null;
      } else if (currentsettings !== response.data) {
        setCurrentSettings(response.data);
        setLoading(false);
      }
    });
  };

  useEffect(() => getData(), []);

  if (loading) {
    return (
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  console.log(currentsettings);

  const showsettings = function () {
    const einstellungen = currentsettings.filter((e) => e.id === 1);
    return (
      <div>
        <ul>
          <li>Faktor_morgens:{einstellungen[0].Faktor_morgens}</li>
          <li>Faktor_mittags:{einstellungen[0].Faktor_mittags}</li>
          <li>Faktor_abends:{einstellungen[0].Faktor_abends}</li>
          <li>Faktor_nachts:{einstellungen[0].Faktor_nachts}</li>
        </ul>
      </div>
    );
  };

  const handleclick = function () {
    // if()
    const options = {
      url: "https://sugarlybackend.herokuapp.com/settings",
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        Faktor_morgens: title,
        Faktor_mittags: title2,
        Faktor_abends: title3,
        Faktor_nachts: title4,
      },
    };
    axios(options).then((response) => {
      console.log(response.status);
      setLoading(false);
    });
  };

  console.log(title);
  return (
    <div>
      <Navbar />
      <Banner title="Einstellungen" />
      <div className="container text-left main-content">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={lolli} alt="Diabeteswerte" width="420" height="320" />
          </div>
          <div className="col-md-6">
            <p>Bitte gib hier deine aktuellen Werte ein.</p>
            <div className="einstellungen">
              <form class="form-wert">
                <label>Faktor morgens:</label>

                <input
                  type="text"
                  // placeholder={obj.Faktor_morgens}
                  value={title}
                  onChange={(e) => {
                    // if (!title) {
                    //   return null;
                    // } else if (title !== e.target.value) {
                    //   console.log(e.target.value);
                    //   setTitle(e.target.value);
                    // }
                    console.log(e.target.value);
                    setTitle(e.target.value);
                  }}
                />
              </form>
              <form class="form-wert">
                <label>Faktor Mittags:</label>
                <input
                  type="text"
                  value={title2}
                  // placeholder={obj.Faktor_mittags}
                  onChange={(e) => {
                    // if (!title2) {
                    //   return null;
                    // } else if (title2 !== e.target.value) {
                    //   setTitle2(e.target.value);
                    // }
                    setTitle2(e.target.value);
                  }}
                />
              </form>
              <form class="form-wert">
                <label>Faktor Abends: </label>
                <input
                  type="text"
                  value={title3}
                  // placeholder={obj.Faktor_abends}
                  onChange={(e) => {
                    // if (!title3) {
                    //   return null;
                    // } else if (title3 !== e.target.value) {
                    //   setTitle3(e.target.value);
                    // }
                    setTitle3(e.target.value);
                  }}
                />
              </form>
              <form class="form-wert">
                <label>Faktor Nachts: </label>
                <input
                  type="text"
                  value={title4}
                  // placeholder={obj.Faktor_nachts}
                  onChange={(e) => {
                    // if (!title4) {
                    //   return null;
                    // } else if (title4 !== e.target.value) {
                    //   setTitle4(e.target.value);
                    // }
                    setTitle4(e.target.value);
                  }}
                />
              </form>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={() => handleclick()}
              >
                Bestätigen
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <Prefooter />
      <Footer />
    </div>
  );
}
