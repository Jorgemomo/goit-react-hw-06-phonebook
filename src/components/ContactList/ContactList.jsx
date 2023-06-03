import { Contact } from '../Contact/Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSelect';

export function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
