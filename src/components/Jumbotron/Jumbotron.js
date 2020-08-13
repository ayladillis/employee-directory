import React from "react";
import "./Jumbotron.css"

function Jumbotron() {
  return (

<div className="header">
  <div className="card">
    <h1 className="card-title">Employee Directory</h1>
    <p className="card-text">This directory allows you to search for employee by name as well as sort alphabetically by email!</p>
  </div>
</div>
  );
}

export default Jumbotron;