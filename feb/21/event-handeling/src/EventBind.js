//event handeler bind method
import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
  }

  clickHandeler() {
    this.setState({
      message: "Goodbye!",
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandeler.bind(this)}>Click</button> event
        bind
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default EventBind;
