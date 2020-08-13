import React from "react";
import "./Jumbotron.css"

function Jumbotron() {
  return (

<div className="header">
  <div className="card-img-overlay">
    <h1 className="card-title">Employee Directory</h1>
    <p className="card-text">This directory allows you to filter employee by name as well as sorts by phone number!</p>
  </div>
</div>
  );
}

export default Jumbotron;