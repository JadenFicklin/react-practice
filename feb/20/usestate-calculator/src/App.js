import "./App.css";
import { useState } from "react";

function App() {
  //Functions

  //input box
  const InputBox = (props) => {
    return (
      <div>
        <input value={props.number} readOnly />
      </div>
    );
  };

  //number buttons
  const Numbers = (props) => {
    return (
      <div>
        <button onClick={props.onClickFunctionOne}>1</button>
        <button onClick={props.onClickFunctionTwo}>2</button>
        <button onClick={props.onClickFunctionThree}>3</button>
        <button onClick={props.onClickFunctionFour}>4</button>
        <button onClick={props.onClickFunctionFive}>5</button>
        <button onClick={props.onClickFunctionSix}>6</button>
        <button onClick={props.onClickFunctionSeven}>7</button>
        <button onClick={props.onClickFunctionEight}>8</button>
        <button onClick={props.onClickFunctionNine}>9</button>
        <button onClick={props.onClickFunctionZero}>0</button>
      </div>
    );
  };

  //app function
  const App = () => {
    const [counterOne, setCounterOne] = useState(0);
    const incrementCounterOne = () => setCounterOne(counterOne + 1);
    const incrementCounterTwo = () => setCounterOne(counterOne + 2);
    const incrementCounterThree = () => setCounterOne(counterOne + 3);
    const incrementCounterFour = () => setCounterOne(counterOne + 4);
    const incrementCounterFive = () => setCounterOne(counterOne + 5);
    const incrementCounterSix = () => setCounterOne(counterOne + 6);
    const incrementCounterSeven = () => setCounterOne(counterOne + 7);
    const incrementCounterEight = () => setCounterOne(counterOne + 8);
    const incrementCounterNine = () => setCounterOne(counterOne + 9);
    const incrementCounterZero = () => setCounterOne(counterOne + 0);

    return (
      <div>
        <InputBox number={counterOne} />
        <Numbers
          onClickFunctionOne={incrementCounterOne}
          onClickFunctionTwo={incrementCounterTwo}
          onClickFunctionThree={incrementCounterThree}
          onClickFunctionFour={incrementCounterFour}
          onClickFunctionFive={incrementCounterFive}
          onClickFunctionSix={incrementCounterSix}
          onClickFunctionSeven={incrementCounterSeven}
          onClickFunctionEight={incrementCounterEight}
          onClickFunctionNine={incrementCounterNine}
          onClickFunctionZero={incrementCounterZero}
        />
      </div>
    );
  };

  //Return
  return <App />;
}

export default App;
