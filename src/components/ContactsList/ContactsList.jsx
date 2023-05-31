import React from 'react';
import css from './ContactsList.module.css';
import { deleteContact } from 'redux/slices/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function ContactsList() {
    const contacts = useSelector(getContacts) ?? [];
    const dispatch = useDispatch();
    return (
        <>
      <ul className={css.contacts}>
          {contacts.map(contact => {
              return (<li className={css.contactItem} key={contact.id}>
                  <span className={css.contactName}>{contact.name}:</span>
                  <span className={css.contactNumber}>{contact.number}</span>
                  <button className={css.buttonDelete} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
              </li>
              )
          })}
            </ul>
            </>
  )
}