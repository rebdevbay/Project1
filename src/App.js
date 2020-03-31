import React, { Component } from "react";
import "./App.css";
import { Header } from "./Header";

class App extends Component {
  state = {
    name: "unknown",
    lastName: "user",
    age: 0
  };
  handleClick = () => {
    this.setState(({ age }) => ({
      age: ++age
    }));
  };

  render() {
    const { name, lastName, age } = this.state;
    return (
      <div className="App-header">
        <Header />
        <div>
          Hi, {name} {lastName} - your old is {age}
        </div>
        how old are you?
        <button className="App-link" onClick={this.handleClick}>
          Pluss age
        </button>
      </div>
    );
  }
}
export default App;
