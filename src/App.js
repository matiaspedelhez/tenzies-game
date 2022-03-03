import React from "react";
import Window from "./components/Window/Window";
import "./App.scss";

function App() {
  return (
    <div className="App" useRef>
      <Window />
      <a
        href="https://www.linkedin.com/in/matias-pedelhez-a84b061b4/"
        target="_blank"
        className="linkedin-link"
        rel="noreferrer"
      >
        in/matias-pedelhez-a84b061b4/
      </a>
    </div>
  );
}

export default App;
