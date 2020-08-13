import React from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Tables from "./components/Tables/Tables"
import logo from './logo.svg';
import './App.css';
import "./components/Search/Search.css"


function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Navbar />
      <Tables />
    </div>
  );
}

export default App;
