import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  return (
    <React.Fragment>
      <h1>{text}</h1>
    </React.Fragment>
  );
};

export default UseStateBasics;
