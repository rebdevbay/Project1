import React from "react";

// const summ = age => {
//   let older = age + 22;
//   return older;
// };
// export const Header = props => (
//   <div className="HeaderDiv">
//     Hello summ({props.name}) + {props.age}
//   </div>
// );

export function Header(props) {
  return (
    <div className="HeaderDiv">
      Hello summ({props.name}) + {props.age} + 'nice'
    </div>
  );
}
