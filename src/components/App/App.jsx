import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Div, Section, Phonebook, Contacts } from './App.styled';

export function App() {
  return (
    <Div>
      <Section title="Phonebook">
        <Phonebook>Phonebook</Phonebook>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Contacts>Contacts</Contacts>
        <Filter />
        <ContactList />
      </Section>
    </Div>
  );
}
