import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  const changeMessage = () => {
    setPeople({ ...people, message: "hello world" });
  };
  return (
    <>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h3>{people.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
