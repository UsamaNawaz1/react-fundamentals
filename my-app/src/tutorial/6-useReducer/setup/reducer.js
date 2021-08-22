export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newItem = [...state.people, action.payload];
    return {
      ...state,
      people: newItem,
      isModelOpen: true,
      modelContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModelOpen: true,
      modelContent: 'please enter the value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModelOpen: false };
  }

  if (action.type === 'REMOVE_ITEM') {
    let newItems = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newItems,
      isModelOpen: true,
      modelContent: 'item removed',
    };
  }
};
