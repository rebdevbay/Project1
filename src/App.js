import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";

class App extends Component {
  state = {
    name: "unknown",
    lastName: "user",
    age: 0,
    plus: false
  };

  handleClick = e => {
    let id = e.target.id;
    console.log(id);
    this.setState(({ age }) => (id > 0 ? { age: ++age } : { age: --age }));
  };

  render() {
    const { name, lastName, age } = this.state;
    return (
      <div className="App-header">
        <Header
          age={age}
          name={name}
          lastName={lastName}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}
export default App;
