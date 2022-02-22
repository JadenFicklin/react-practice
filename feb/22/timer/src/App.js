import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function TimerFunction() {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
  });

  const lessThanFive = secondsLeft < 8;

  return (
    <div
      className="timer"
      style={
        lessThanFive
          ? { backgroundColor: "red" }
          : { backgroundColor: "lightGray" }
      }
    >
      Time Remaining: {secondsLeft}
    </div>
  );
}

function App() {
  return <TimerFunction />;
}

export default App;
