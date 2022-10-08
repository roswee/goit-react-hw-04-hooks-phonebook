import { useEffect, useState } from 'react';
import { Adder } from 'components/Adder/Adder';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsInMemory = localStorage.getItem('contacts');
    const userContacts = JSON.parse(contactsInMemory);
    if (userContacts === []) {
      setContacts(userContacts);
    } else {
      setContacts([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]);
    }
  }, []);

  useEffect(() => {
    const contactsInMemory = localStorage.getItem('contacts');
    const userContacts = JSON.parse(contactsInMemory);
    if (contacts !== userContacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const contactSubmit = values => {
    const nameArray = contacts.map(contact => {
      return contact.name;
    });
    if (nameArray.includes(values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }
    return setContacts([values, ...contacts]);
  };

  const filteredValues = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  function handleFinder(evt) {
    setFilter(evt.target.value);
  };

  const deleteHandler = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Adder onSubmit={contactSubmit} />
      <Filter handleFinder={handleFinder} />
      <ContactsList contacts={filteredValues()} deleteHandler={deleteHandler} />
    </>
  );
};
