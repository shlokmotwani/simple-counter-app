import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [customValues, setCustomValues] = useState({
    incInput: 0,
    decInput: 0,
  });
  const [countHistory, setCountHistory] = useState([count]);

  function handleIncrement(num) {
    setCount((count) => count + num);
    let history = [...countHistory, count + num];
    setCountHistory(history);
  }

  function handleDecrement(num) {
    let history;
    setCount((count) => {
      if (count-num <= 0) {
        return 0;
      } else {
        return count - num;
      }
    });
    if(count>0){
      if (count - num >= 0) {
        history = [...countHistory, count - num];
        setCountHistory(history);
      }
      else{
        history = [...countHistory, 0];
        setCountHistory(history);
      }
    }
   
  }

  function handleCustomIncrement() {
    handleIncrement(customValues.incInput);
  }

  function handleCustomDecrement() {
    handleDecrement(customValues.decInput);
  }

  function handleIncInputChange(e) {
    let values = {
      ...customValues,
      incInput: Number(e.target.value),
    };
    setCustomValues(values);
  }

  function handleDecInputChange(e) {
    let values = {
      ...customValues,
      decInput: Number(e.target.value),
    };
    setCustomValues(values);
  }

  function handleReset() {
    setCount(0);
    setCountHistory([count]);
  }

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <div>
          <button onClick={()=>handleIncrement(1)}>+</button>
          <button onClick={()=>handleDecrement(1)}>-</button>
        </div>
        <div id="custom-input-div">
          <p>
            Increment by :
            <input
              type="number"
              name=""
              id=""
              onChange={handleIncInputChange}
            />
            <button onClick={handleCustomIncrement}>OK</button>
          </p>
          <p>
            Decrement by :
            <input
              type="number"
              name=""
              id=""
              onChange={handleDecInputChange}
            />
            <button onClick={handleCustomDecrement}>OK</button>
          </p>
        </div>
        <button id="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div>
        <p>Count History :{countHistory.join(", ")}</p>
      </div>
    </div>
  );
}

export default App;
