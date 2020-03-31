import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";

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
        <Header age={age} name={name} lastName={lastName} />
        how old are you?
      </div>
    );
  }
}
export default App;
