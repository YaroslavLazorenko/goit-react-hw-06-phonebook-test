import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import reducer from './phonebook/phonebook-reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

export default store;
