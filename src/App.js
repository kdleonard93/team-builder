import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MemberList from "./components/MemberList";

function App() {
  return (
    <div className="App">
      <Form />
      <MemberList />
    </div>
  );
}

export default App;
