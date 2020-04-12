import React, { Component } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Uncover } from "./Components/Uncover";
import { Login } from "./Components/Login";
class App extends Component {
  state = {
    name: "unknown",
    lastName: "user",
    age: 0,
    adult: false,
    nos: false,
  };

  handleClick = (e) => {
    let id = e.target.id;
    console.log(id);
    this.setState(({ age }) => (id > 0 ? { age: 18 } : { age: 0 }));

    this.setState(({ adult, age }) =>
      age >= 18 ? { adult: true } : { adult: false, nos: true }
    );
  };

  render() {
    const { name, lastName, age, adult } = this.state;
    console.log(this.state);
    return (
      <div className="App-header">
        <Header
          age={age}
          name={name}
          lastName={lastName}
          handleClick={this.handleClick}
          adult={adult}
        />
        {adult ? <Login /> : <Uncover />}
      </div>
    );
  }
}
export default App;
