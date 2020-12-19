import React, { useState } from "react";
import "./styles.css";

var symbols = {
  "💌": "love letter",
  "💣": "Bomb",
  "🏺": "Amphora",
  "🗺️": "World Map",
  "🛎️": "Bellhop",
  "⏰": "Alarm Clock",
  "🙈": "See_No_Evil_Monkey",
  "🙉": "Hear_No_Evil_Monkey",
  "🙊": "Speak_No_Evil_Monkey",
  "🏁": "Chequered Flag",
  "🏴‍☠️": "Pirate Flag",
  "🏜️": "Desert",
  "🏫": "School",
  "🏥": "Hospital",
  "🏰": "Castle",
  "🍒": "Cherries",
  "🥑": "Avocado",
  "🦨": "Skunk",
  "🦉": "Owl",
  "💤": "ZZZ",
  "🛶": "Canoe",
  "🚣": "Rowing Boat",
  "🎄": "Christman_Tree",
  "🧭": "Compass"
};
var symbol = Object.keys(symbols);

export default function App() {
  var [name, setName] = useState("");

  function input(event) {
    var sym = event.target.value;
    if (sym !== "") {
      var val = symbols[sym];
      if (val === undefined) val = "Oops..!! Check some other symbol";
      setName(val);
    } else setName("");
  }

  function click(sym) {
    var val = symbols[sym];
    setName(val);
  }

  return (
    <div className="App">
      <h1>Guess the symbol...!!!</h1>
      <input onChange={input} />
      <h2>{name}</h2>
      <h3> Check out these symbols </h3>
      {symbol.map((symbol) => {
        return (
          <span
            class="symbols"
            onClick={() => click(symbol)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
          >
            {symbol}
          </span>
        );
      })}
    </div>
  );
}
