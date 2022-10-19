import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';
import {initState} from "./initialState"

const phonebookReducer = createReducer(initState, {
  [addContact]: (state, action) => [action.payload, ...state],
  [removeContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
    [setFilter]: (state, action) => action.payload,
});

export const reducers = combineReducers({
    contacts: phonebookReducer, 
    filter: filterReducer,
});
