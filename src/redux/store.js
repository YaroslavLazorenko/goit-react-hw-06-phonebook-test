import { createStore } from 'redux';
import reducer from './phonebook/phonebook-reducer';

const store = createStore(reducer);

export default store;
