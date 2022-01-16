// import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
// import { save, load } from './services/storage-api';
import './App.css';
import { connect } from 'react-redux';

const App = ({ contacts }) => {
  // useEffect(() => {
  //   const contacts = load('contacts');
  //   if (contacts) setContacts(contacts);
  // }, []);

  // const deleteContact = id => {
  //   const contactsAfterDelete = contacts.reduce((acc, contact) => {
  //     return contact.id !== id ? [...acc, contact] : acc;
  //   }, []);

  //   setContacts(contactsAfterDelete);
  //   save('contacts', contactsAfterDelete);
  // };

  return (
    <div className="App">
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm />

      <h2 className="contactsTitle">Contacts</h2>
      <Filter />
      {contacts.length !== 0 && <ContactList />}
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
