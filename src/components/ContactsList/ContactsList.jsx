import css from './ContactsList.module.css';
import { deleteContact } from 'redux/slices/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export function ContactsList() {
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    
  return (
    <>
      <ul className={css.contacts}>
        {filteredContacts.map(contact => {
          return (
            <li className={css.contactItem} key={contact.id}>
              <div>
                <span className={css.contactName}>{contact.name}:</span>
                <span className={css.contactNumber}>{contact.number}</span>
              </div>
              <button
                className={css.buttonDelete}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
