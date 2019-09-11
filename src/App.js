import React from "react";
import logo from "./logo.svg";
import "./App.css";
import From from "./components/Form";
import MemberList from "./components/MemberList";

function App() {
  return (
    <div className="App">
      <From></From>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
