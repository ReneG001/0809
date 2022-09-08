import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Prefooter from "../components/Prefooter";
import Footer from "../components/Footer.js";
import axios from "axios";
import Select from "react-select";
import "./Main.css";

export default function LebensmittelHinzu() {
  const [loading, setLoading] = useState(true);
  const [custom_name, setCustom_name] = useState("");
  const [custom_brennwert, setCustom_brennwert] = useState(0);
  const [custom_fett, setCustom_fett] = useState(0);
  const [custom_kohlenhydrate, setCustom_kohlenhydrate] = useState(0);
  const [custom_davon_zucker, setCustom_davon_zucker] = useState(0);
  const [custom_protein, setCustom_protein] = useState(0);
  const [custom_ballaststoffe, setCustom_ballaststoffe] = useState(0);
  const [list_ingridients, setList_ingridients] = useState([]);
  const [buttoninfo, setButtoninfo] = useState([]);
  const [input, setInput] = useState(100);

  const [input2, setInput2] = useState("");

  const getData = function () {
    const options = {
      url: "https://sugarlybackend.herokuapp.com/newingridient",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options).then((response) => {
      if (!list_ingridients) {
        return null;
      } else if (list_ingridients !== response.data) {
        setList_ingridients(response.data);
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

  const handleclick = function () {
    const options = {
      url: "https://sugarlybackend.herokuapp.com/newingridient/newentry",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: custom_name,
        menge_in_g: 100,
        brennwert_kcal: custom_brennwert,
        fett: custom_fett,
        kohlenhydrate: custom_kohlenhydrate,
        davon_zucker: custom_davon_zucker,
        protein: custom_protein,
        ballaststoffe: custom_ballaststoffe,
      },
    };
    axios(options).then((response) => {
      console.log(response.status);
      console.log(custom_name);
    });
  };

  const Post_entry = (funde) => {
    const options = {
      url: "https://sugarlybackend.herokuapp.com/entrys/add",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: funde.name,
        menge: parseInt(input),
        brennwert: (input * funde.brennwert_kcal) / 100,
        fett: (input * funde.fett) / 100,
        kohlenhydrate: (input * funde.kohlenhydrate) / 100,
        davonzucker: (input * funde.davon_zucker) / 100,
        protein: (input * funde.protein) / 100,
        ballaststoffe: (input * funde.ballaststoffe) / 100,
        mahlzeit: input2,
      },
    };
    axios(options).then((response) => {
      console.log(response.status);
    });
  };

  const handleclick2 = function (e) {
    if (!buttoninfo) {
      return null;
    } else if (buttoninfo !== e.target.dataset.name) {
      setButtoninfo(e.target.dataset.name);
    }
  };

  function fund() {
    let funde = list_ingridients.find((e) => buttoninfo === e.name);
    if (!funde) {
      return null;
    }

    const options = [
      { value: "frühstück", label: "Frühstück" },
      { value: "mittag", label: "Mittagessen" },
      { value: "abend", label: "Abendbrot" },
      { value: "nacht", label: "Nachts" },
    ];

    const handleChange = (selectedOption) => {
      if (!selectedOption) {
        return null;
      } else if (input2 !== selectedOption.label) {
        setInput2(selectedOption.label);
      }
    };

    console.log(input2);
    return (
      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Menge (in g)</th>
              <th scope="col">Brennwert (Kcal)</th>
              <th scope="col">Fett</th>
              <th scope="col">Kohlenhydrate</th>
              <th scope="col">davon Zucker</th>
              <th scope="col">Protein</th>
              <th scope="col">Ballaststoffe</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            <th scope="row">{funde.id}</th>
            <td>{funde.name}</td>
            <td>
              {" "}
              <form>
                <input
                  type="text"
                  id="menge"
                  name="menge"
                  placeholder="100"
                  onChange={(e) => {
                    if (!input) {
                      return null;
                    } else if (input !== e.target.value) {
                      setInput(e.target.value);
                    }
                  }}
                />
              </form>
            </td>
            <td>{(input * funde.brennwert_kcal) / 100}</td>
            <td>{(input * funde.fett) / 100}</td>
            <td>{(input * funde.kohlenhydrate) / 100}</td>
            <td>{(input * funde.davon_zucker) / 100}</td>
            <td>{(input * funde.protein) / 100}</td>
            <td>{(input * funde.ballaststoffe) / 100}</td>
          </tbody>
        </table>
        <Select options={options} onChange={handleChange} />
        <button
          type="button"
          class="btn btn-primary btn-lg"
          onClick={() => Post_entry(funde)}
        >
          Hinzufügen zu Tagesplan
        </button>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Banner title="Lebensmittel hinzufügen" />
      <div className="container text-left main-content">
        <div className="row hinzu">
          <div classname="col lang">
            <p>
              Hier kannst du eigene Lebensmittel hinzufügen, die nicht in der
              Liste erwähnt sind.
            </p>

            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target=".bd-example-modal-lg1"
            >
              Eigenes Lebensmittel Hinzufügen
            </button>
          </div>

          <div
            class="modal fade bd-example-modal-lg1"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Name:</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Name"
                      defaultValue={custom_name}
                      onChange={(e) => {
                        // if (!custom_name) {
                        //   return null;
                        // } else if (custom_name !== e.target.value) {
                        //   console.log(e.target.value);
                        //   setCustom_name(e.target.value);
                        //   console.log(custom_name);
                        // }
                        console.log(e.target.value);
                        setCustom_name(e.target.value);
                        console.log(custom_name);
                      }}
                    />
                    <label for="exampleFormControlTextarea1">
                      Brennwert für 100g:
                    </label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Brennwert für 100g"
                      defaultValue={custom_brennwert}
                      onChange={(e) => {
                        // if (!custom_brennwert) {
                        //   return null;
                        // } else if (custom_brennwert !== e.target.value) {
                        //   setCustom_brennwert(e.target.value);
                        // }
                        setCustom_brennwert(e.target.value);
                      }}
                    />
                    <label for="exampleFormControlTextarea1">Fett:</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Fett"
                      defaultValue={custom_fett}
                      onChange={(e) => {
                        // if (!custom_fett) {
                        //   return null;
                        // } else if (custom_fett !== e.target.value) {
                        //   setCustom_fett(e.target.value);
                        // }
                        setCustom_fett(e.target.value);
                      }}
                    />
                    <label for="exampleFormControlTextarea1">
                      Kohlenhydrate:
                    </label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Kohlenhydrate"
                      defaultValue={custom_kohlenhydrate}
                      onChange={(e) => {
                        // if (!custom_kohlenhydrate) {
                        //   return null;
                        // } else if (
                        //   custom_kohlenhydrate !== e.target.value
                        // ) {
                        //   setCustom_kohlenhydrate(e.target.value);
                        // }
                        setCustom_kohlenhydrate(e.target.value);
                      }}
                    />
                    <label for="exampleFormControlTextarea1">
                      davon Zucker:
                    </label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="davon Zucker"
                      defaultValue={custom_davon_zucker}
                      onChange={(e) => {
                        // if (!custom_davon_zucker) {
                        //   return null;
                        // } else if (custom_davon_zucker !== e.target.value) {
                        //   setCustom_davon_zucker(e.target.value);
                        // }
                        setCustom_davon_zucker(e.target.value);
                      }}
                    />
                    <label for="exampleFormControlTextarea1">Protein:</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Protein"
                      defaultValue={custom_protein}
                      onChange={(e) => {
                        // if (!custom_protein) {
                        //   return null;
                        // } else if (custom_protein !== e.target.value) {
                        //   setCustom_protein(e.target.value);
                        // }
                        setCustom_protein(e.target.value);
                      }}
                    />
                    <label for="exampleFormControlTextarea1">
                      Ballaststoffe:
                    </label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      placeholder="Ballaststoffe"
                      defaultValue={custom_ballaststoffe}
                      onChange={(e) => {
                        // if (!custom_ballaststoffe) {
                        //   return null;
                        // } else if (
                        //   custom_ballaststoffe !== e.target.value
                        // ) {
                        //   setCustom_ballaststoffe(e.target.value);
                        //   console.log(custom_ballaststoffe);
                        // }
                        setCustom_ballaststoffe(e.target.value);
                        console.log(custom_ballaststoffe);
                      }}
                    />
                    <p>&nbsp;</p>

                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => handleclick()}
                    >
                      Erstellen
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col lebensmittelliste">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Menge (in g)</th>
                  <th scope="col">Brennwert (Kcal)</th>
                  <th scope="col">Fett</th>
                  <th scope="col">Kohlenhydrate</th>
                  <th scope="col">davon Zucker</th>
                  <th scope="col">Protein</th>
                  <th scope="col">Ballaststoffe</th>
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {list_ingridients.map((data) => (
                  <tr>
                    <th scope="row">{data.name}</th>

                    <td>{data.menge_in_g}</td>
                    <td>{data.brennwert_kcal}</td>
                    <td>{data.fett}</td>
                    <td>{data.kohlenhydrate}</td>
                    <td>{data.davon_zucker}</td>
                    <td>{data.protein}</td>
                    <td>{data.ballaststoffe}</td>

                    <td>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target=".bd-example-modal-lg"
                        data-name={data.name}
                        onClick={handleclick2}
                      >
                        Hinzufügen
                      </button>

                      <div
                        class="modal fade bd-example-modal-lg"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="myLargeModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">{fund()}</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Prefooter />
      <Footer />
    </div>
  );
}
