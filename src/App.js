import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  fetch("http://localhost:3001/api")
    .then((res) => res.json())
    .then((data) => setTitle(data.title));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{title ? <h1>{title}</h1> : <h1>loading</h1>}</div>
      </header>
    </div>
  );
}

export default App;
