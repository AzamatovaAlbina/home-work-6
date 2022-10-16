import { useState } from "react";
import './Counter.css'
function Counter() {
  const [newCounter, setNewCounter] = useState(0);
  function increaseCounter() {
    setNewCounter(newCounter + 1);
  }
  function decreaseCounter() {
    if (newCounter > 0) {
      setNewCounter(newCounter - 1);
    }
  }
  return (
    <div className="counterContainer">
      <h1>{newCounter}</h1>
      <div className="counter">
        <button className="counterButton" onClick={increaseCounter}>
          increase
        </button>
        <button className="counterButton" onClick={decreaseCounter}>
          decrease
        </button>
      </div>
    </div>
  );
}
export default Counter;
