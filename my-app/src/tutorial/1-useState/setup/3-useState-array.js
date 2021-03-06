import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setpeople] = React.useState(data);
  const removeItem = (id) => {
    console.log("hello");
    let newPeople = people.filter((person) => person.id !== id);
    setpeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setpeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
