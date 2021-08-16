import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setage] = useState(24);
  const [message, setmessage] = useState("Random Message");

  const changeMessage = () => {
    // setPeople({ ...setPeople, message: "hello world" });
    setmessage("hello world");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
