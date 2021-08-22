import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      people: data,
      isModelOpen: true,
      modelContent: 'item added',
    };
  }
  throw new Error('NO matching action type');
};

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
      dispatch({ type: 'ADD_ITEM' });
    } else {
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
