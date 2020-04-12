import React from "react";

export function Header(props) {
  const { name, lastName, handleClick, adult, nos } = props;

  return (
    <div className="HeaderDiv">
      Task manager
      <div>
        Hi, {name} {lastName} {adult ? "" : "are you 18?"}
      </div>
      <div className="HeaderDiv">
        {adult ? (
          ""
        ) : nos ? (
          ""
        ) : (
          <div>
            <button className="Header-link" id="1" onClick={handleClick}>
              Yes
            </button>
            <button className="Header-link" id="0" onClick={handleClick}>
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
