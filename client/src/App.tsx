import React from "react";
import logo from "./logo.svg";
import "./App.css";

const loginInfo = async () => {
  const result = await fetch("/api/test/login", {
    method: "POST",
    body: JSON.stringify({ email: "hihi@joejob.com", password: "12345" }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return result;
};

console.log((async () => await loginInfo())());
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="/api/test/login">login test</a>
      </header>
    </div>
  );
};

export default App;
