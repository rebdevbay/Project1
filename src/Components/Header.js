import React from "react";

export function Header(props) {
  const { name, lastName, age } = props;
  return (
    <div className="HeaderDiv">
      Task manager
      <div>
        Hi, {name} {lastName} - your old is {age}
      </div>
    </div>
  );
}
