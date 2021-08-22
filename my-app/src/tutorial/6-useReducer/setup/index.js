import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {};

const defaultState = {
  people: data,
  isModelOpen: false,
  modelContent: 'hello',
};
const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
    }
  };
  return (
    <>
      {state.isModelOpen && <Modal modelContent={state.modelContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div>
            <h4>{name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
