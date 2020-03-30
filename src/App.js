import React from "react";
import "./App.css";
import { Header } from "./Header";

function App() {
  let a = 2;
  let b = 4;
  let c = a + b;

  return (
    <div className="App">
      <p>Hey world!</p>
      <Header age={c} name="Pasha" />
    </div>
  );
}

export default App;
