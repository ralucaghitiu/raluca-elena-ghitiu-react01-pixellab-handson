import contacts from './data.js';

export const findContact = (needle = 'query') => {
  const results = contacts.filter((contact) => {
    const values = Object.values(contact);
    // [1, 'Carol', 'Carolson', '0741..', 'carol@...']

    const haystack = values.reduce((haystack, value) => {
      if (typeof value === 'string') {
        haystack += value.toLowerCase();
      }

      return haystack;
    }, '');

    if (haystack.includes(needle)) {
      return true;
    }

    return false;
  });

  return results;
};

export const deleteContact = (contactId) => {
  contactId = Number(contactId);
  let contactIndex = -1;

  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];

    if (contact.id === contactId) {
      contactIndex = i;

      break;
    }
  }

  if (contactIndex >= 0) {
    // splice mutates
    contacts.splice(contactIndex, 1);
  }
};

export const getContact = (contactId) => {
  contactId = Number(contactId);

  return contacts.find(({ id }) => {
    return id === contactId;
  });
};
