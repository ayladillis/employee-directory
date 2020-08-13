import React from 'react';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
