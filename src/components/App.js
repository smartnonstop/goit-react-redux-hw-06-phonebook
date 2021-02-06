import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export default function App () {

  return (
    <>
      <h2>Phone book</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </>
  );
}