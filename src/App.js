import React from "react";
import Window from "./components/Window/Window";

// ## make so the window title changes for something like "Congratulations!" when you win a tenzies game
// # try to add functionality to the close, resize and minimize buttons

// design https://github.com/marcantondahmen/automad-terminal

function App() {
  return (
    <div className="App">
      <Window title={"Tenzies Game!"} />
    </div>
  );
}

export default App;
