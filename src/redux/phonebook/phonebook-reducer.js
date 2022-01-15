import combineReducers from 'redux';

const initialItemsState = [];
const initialFilterState = '';

const itemsReducer = (state = initialItemsState, action) => state;

const filterReducer = (state = initialFilterState, action) => state;

export default combineReducers(itemsReducer, filterReducer);
