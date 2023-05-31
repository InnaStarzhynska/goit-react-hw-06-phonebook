import css from './ContactsList.module.css';
import { deleteContact } from 'redux/slices/contactsSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


export function ContactsList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <>
      <ul className={css.contacts}>
        {contacts.map(contact => {
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

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
}