import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function

const defaultState = {
  people: [],
  isModelOpen: false,
  modelContent: 'hello',
};
const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModel = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.isModelOpen && (
        <Modal modelContent={state.modelContent} closeModal={closeModel} />
      )}
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
          <div className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
