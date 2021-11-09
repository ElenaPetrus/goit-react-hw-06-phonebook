import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { getVisibleContacts } from '../../redux/selectors';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  return (
    <ul className={s.contactList}>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={s.item}>
          <span className={s.text}>{name}</span>
          <span className={s.text}>{number}</span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export { ContactList };
