import React from "react";

function ColorBox({ color }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        marginTop: "10px",
      }}
    ></div>
  );
}

export default ColorBox;
