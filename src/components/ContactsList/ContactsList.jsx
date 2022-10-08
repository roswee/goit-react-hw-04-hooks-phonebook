import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, deleteHandler }) => {
  return (
    <>
      {contacts.length === 0 ? (
        <p>Add some contact to see them.</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}{' '}
              <button
                type="submit"
                onClick={() => {
                  deleteHandler(contact.id);
                }}
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
  contacts: PropTypes.array,
  deleteHandler: PropTypes.func,
};

export default ContactsList;
