import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/actions';



export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  return (
    <>
      {contacts.length === 0 ? (
        <p>Add some contact to see them.</p>
      ) : (
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button
                type="submit"
                onClick={() => 
                  dispatch(removeContact(contact.id))
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array
};

export default ContactsList;
