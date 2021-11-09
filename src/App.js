import ContactForm from './components/ContactForm/ContactForm';
import { Filter } from './components/FIlter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import s from './App.module.css';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function App() {
  const contacts = useSelector(state => state.items);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <span> Total contacts: {contacts.length}</span>

      <ContactForm />

      <h2 className={s.title}>Contacts</h2>

      <Filter />
      <ContactList />
    </div>
  );
}
