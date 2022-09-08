import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white mt-5">
      <div className="container copyright">
        <div className="row py-3">
          <div className="col-5 text-left">
            &#169; {new Date().getFullYear()} by the epic P-R-R
          </div>
          <div className="col-7 text-right socials">
            <div>
              <span>Follow Us: </span>
              <a href="https://www.google.de/">
                <i className="fab fa-instagram px-3" />
              </a>
              <a href="https://www.google.de/">
                <i className="fab fa-pinterest pr-3" />
              </a>

              <a href="https://www.google.de/">
                <i className="fab fa-github pr-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
