import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [valueBar, setValueBar] = useState(0);

  return (
    <div>
      <input
        value={valueBar}
        onChange={(e) => setValueBar(Number(e.target.value))}
      ></input>
      <button onClick={() => setCount(valueBar)}>Start</button>
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+1</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-1</button>
    </div>
  );
}

export default Counter;
