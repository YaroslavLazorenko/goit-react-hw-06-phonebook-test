import { combineReducers } from 'redux';
import types from './phonebook-types';

const initialItemsState = [];
const initialFilterState = '';

const itemsReducer = (state = initialItemsState, action) => {
  switch (action.type) {
    case types.ADD:
      return [state, ...action.payload];
    case types.DELETE:
      return [...state.filter(({ id }) => id !== action.payload)];
    default:
      return state;
  }
};

const filterReducer = (state = initialFilterState, action) => state;

export default combineReducers({ items: itemsReducer, filter: filterReducer });
