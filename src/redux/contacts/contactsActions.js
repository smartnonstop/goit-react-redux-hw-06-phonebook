import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/addContact', (name, number) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number
    }
  }
}));

const deleteContact = createAction('contacts/deleteContact');

const filterChange = createAction('contacts/filterChange');

const obj = {
  addContact,
  deleteContact,
  filterChange,
};

export default obj;



// const addContact = (name, number) => ({
//   type: 'contacts/addContact',
//   payload: {
//     contact: {
//       id: uuidv4(),
//       name,
//       number
//     }
//   }
// });

// const deleteContact = (id) => ({
//   type: 'contacts/deleteContact',
//   payload: {
//     id
//   }
// });

// const filterChange = (filter) => ({
//   type: 'contacts/filterChange',
//   payload: {
//     filter
//   }
// });




