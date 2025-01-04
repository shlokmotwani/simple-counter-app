import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [customValues, setCustomValues] = useState({
    incInput : 0,
    decInput: 0,
  });
  const [countHistory, setCountHistory] = useState([count]);

  function handleIncrement(num = 1) {
    setCount((count) => {
      let history = [...countHistory, count + num];
      setCountHistory(history);
      return count + num;
    });
  }

  function handleDecrement(num = 1) {
    setCount((count) => {
      let history;
      if (count - num <= 0) {
        if(count <= 0){
          return 0;
        }
        history = [...countHistory, 0];
        setCountHistory(history);
        return 0;
      } else {
        history = [...countHistory, count - num];
        setCountHistory(history);
        return count - num;
      }
    });
  }

  function handleCustomIncrement(){
    handleIncrement(customValues.incInput);
  }

  function handleCustomDecrement(){
    handleDecrement(customValues.decInput);
  }

  function handleIncInputChange(e){
    let values = {
      ...customValues,
      incInput: Number(e.target.value),
    };
    setCustomValues(values);
  }

  function handleDecInputChange(e){
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
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
        </div>
        <div id="custom-input-div">
          <p>
            Increment by :
            <input type="number" name="" id="" onChange={handleIncInputChange}/>
            <button onClick={handleCustomIncrement}>OK</button>
          </p>
          <p>
            Decrement by :
            <input type="number" name="" id="" onChange={handleDecInputChange}/>
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
