import "./App.css";
import { useState } from "react";

function App() {
  function Button() {
    const [counter, setCounter] = useState(0);
    function setCounterNumber() {
      return setCounter(counter + 1);
    }
    return <button onClick={setCounterNumber}>{counter}</button>;
  }

  return <Button />;
}

export default App;
