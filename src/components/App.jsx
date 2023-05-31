import css from './App.module.css';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const handleFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <div>
      <h1 className={css.titleForm}>Phonebook</h1>
      <PhonebookForm />
      <h2 className={css.titleContacts}>Contacts</h2>
      <Filter />
      <ContactsList contacts={handleFilterContacts()} />
    </div>
  );
}
