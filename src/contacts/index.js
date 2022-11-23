import React, {useContext} from 'react';
import {ContactContext} from '../App';
import stylesCenter from './index.module.css';
import ContactItem from './ContactItem';

const Contacts = () => {
  // NOTE: 'teach' the button to add new contact info
  // NOTE: and render an array of ContactItem components

  const {contacts, onChangeHandler, remove, create} =
    useContext(ContactContext);

  const contactsList = contacts.map(({id, channel, details}, index) => {
    return (
      <ContactItem
        key={id}
        index={index}
        id={id}
        select={channel}
        onChangeHandler={onChangeHandler}
        text={details}
        remove={remove}
      />
    );
  });

  return (
    <>
      <div className={stylesCenter.channels}>{contactsList}</div>
      <div>
        <button
          onClick={create}
          className={stylesCenter.addButton}
          data-testid='add-button'
        >
          <img src='plus.svg' alt='plus logo' />
          <span className={stylesCenter.addButtonText}>
            Додати канал зв'язку
          </span>
        </button>
      </div>
    </>
  );
};

export default Contacts;
