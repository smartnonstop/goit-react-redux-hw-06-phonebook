import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contactsActions';

const isContactExists = (state, name) => {
  const obj = state.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  return obj;
}

const addTask = (state, action) => {
  if (!isContactExists(state, action.payload.contact.name)) {
    return [...state, action.payload.contact];
  } else {
    alert(action.payload.contact.name+" is already in contacts");
    return state;
  }
}

const items = createReducer([], {
  [contactsActions.addContact]: addTask,
  [contactsActions.deleteContact]: (state, action) => state.filter(contact => contact.id !== action.payload)
});

const filter = createReducer('', {
  [contactsActions.filterChange]: (state, action) => action.payload
});


export default combineReducers({
  items,
  filter,
});





// const items = (state = [], action) => {
  //   switch (action.type) {
  //     case 'contacts/addContact':
  //       if (!isContactExists(state, action.payload.contact.name)) {
  //         return [...state, action.payload.contact];
  //       } else {
  //         alert(action.payload.contact.name+" is already in contacts");
  //         return state;
  //       }
  
  //     case 'contacts/deleteContact':
  //       return state.filter(contact => contact.id !== action.payload);
        
  //     default:
  //       return state;
  //   }
  // }
  
  // const filter = (state = '', action) => {
  //   switch (action.type) {
  //     case 'contacts/filterChange':
  //       return action.payload;
    
  //     default:
  //       return state;
  //   }
  // }