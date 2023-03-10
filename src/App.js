import React from "react";
import { useState } from "react";

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // Operaciones
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <h1> give feedback </h1>
      <div >
        <button onClick={() => setGood(good + 1)}>
          Good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          Bad
        </button>
      </div>
      <div>
        <h1>statics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    </div>
  );
}

export default App;
