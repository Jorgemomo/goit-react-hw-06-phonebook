import { ContactItem, Button } from './Contact.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ContactItem key={id}>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ContactItem>
  );
}
