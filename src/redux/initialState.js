const localeContacts = () => {
  const contacts =  localStorage.getItem('contacts');
  if (contacts === undefined) {
    return []
  } else {
    const parseContacts = JSON.parse(contacts)
    return parseContacts
  }
}

const randomContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

export const initState = () => {
;
  if (localeContacts.length < 1) {
    return randomContacts;
  } else {
    return localeContacts;
  }
};
