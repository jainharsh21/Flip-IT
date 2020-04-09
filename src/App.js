import React from "react";
import "./App.css";
import Coin from "./Coin";

function App() {
  return (
    <div className="App">
      <Coin
        flips={2}
        heads={1}
        tails={1}
        imgUrl="https://tinyurl.com/react-coin-heads-jpg"
      />
    </div>
  );
}

export default App;
