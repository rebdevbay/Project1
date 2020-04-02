import React from "react";

export function Header(props) {
  const { name, lastName, age, handleClick } = props;
  console.log(props);
  return (
    <div className="HeaderDiv">
      Task manager
      <div>
        Hi, {name} {lastName} - your old is {age}
      </div>
      <div className="HeaderDiv">
        <button className="Header-link" id="1" onClick={handleClick}>
          Pluss
        </button>
        <button className="Header-link" id="0" onClick={handleClick}>
          Minus
        </button>
      </div>
    </div>
  );
}
