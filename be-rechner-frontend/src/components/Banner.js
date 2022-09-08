import React from "react";
import "./Banner.css";

export default function Banner(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-3">{props.title}</h1>
      </div>
    </div>
  );
}
