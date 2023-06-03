export const getContacts = state => {
  return state.contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.contacts.query)
  );
};

export const getFilter = state => state.contacts.filter;
