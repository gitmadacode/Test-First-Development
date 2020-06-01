import React from "react";
import Korone from './korone.gif';

export default function Counter() {
  const [counter, setcounter] = React.useState(0);
  return (
    <div>
    <h1>This is counter app with TDD</h1>
      <img src={Korone} alt="korone" />
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
        Increment
      </button>
      <button id="decrement-btn" onClick={() => setcounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}

