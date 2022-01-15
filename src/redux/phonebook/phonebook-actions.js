import { nanoid } from 'nanoid';
import types from './phonebook-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: { id: nanoid(), name, number },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const changeFiler = value => ({ type: types.CHANGE_FILTER, payload: value });
