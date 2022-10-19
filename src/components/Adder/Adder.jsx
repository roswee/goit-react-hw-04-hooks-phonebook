import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';

export const Adder = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    form.reset();

    const nameArray = contacts.map(contact => {
      return contact.name;
    });


    if (nameArray.includes(name)) {
      return alert(`${name} is already in contacts.`);
    }
    return dispatch(addContact({
      id: nanoid(),
      name,
      number,
    }));
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        {' '}
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        {' '}
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
