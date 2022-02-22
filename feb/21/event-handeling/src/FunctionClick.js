import React from "react";

function FunctionClick() {
  function clickHandeler() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <button onClick={clickHandeler}>Click</button> function component event
      handeler
    </div>
  );
}

export default FunctionClick;
