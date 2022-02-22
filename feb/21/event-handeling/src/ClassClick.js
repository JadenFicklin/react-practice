import React, { Component } from "react";

class ClassClick extends Component {
  clickHandeler() {
    console.log("Clicked the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandeler}>Click me</button> class component
        event handeler
      </div>
    );
  }
}

export default ClassClick;
