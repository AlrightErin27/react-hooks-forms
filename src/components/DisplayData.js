import React from "react";

function DisplayData({ firstName, lastName }) {
  const nameBreak = "    ";
  return (
    <div>
      {firstName}
      {nameBreak}
      {lastName}
    </div>
  );
}

export default DisplayData;
