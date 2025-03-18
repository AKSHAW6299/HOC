import React from "react";

function Hoc(props) {
  console.log("props :", props);

  return (
    <div>
      <h1>Hoc</h1>
      <p>{props.com()}</p>
    </div>
  );
}

export default Hoc;
