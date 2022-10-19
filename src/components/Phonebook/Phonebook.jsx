import { Adder } from 'components/Adder/Adder';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const Phonebook = () => {


  return (
    <>
      <h2>Phonebook</h2>
      <Adder />
      <Filter/>
      <ContactsList />
    </>
  );
};