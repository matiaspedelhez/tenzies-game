import React from "react";
import Window from "./components/Window/Window";
import "./App.scss";

function App() {
  const [screenWidth, setScreenWidth] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);
    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  function handleScreenWidth(e) {
    setScreenWidth(window.innerWidth);
  }

  return screenWidth > 1000 ? ( //
    <div className="App">
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
  ) : (
    <h3 className="error">This site is intended to be opened on desktop.</h3>
  );
}

export default App;
