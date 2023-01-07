import React, {createContext, useCallback, useState} from 'react';
import './App.css';
import Contacts from './contacts';
import Logo from './Logo';

export const ContactContext = createContext();

function App() {
  const createDefaultObj = () => {
    const obj = {
      id: 0,
      channel: 'none',
      details: '',
    };
    return obj;
  };

  const defaultObj = createDefaultObj;
  const [contacts, setContacts] = useState([defaultObj]);

  const onChangeHandler = useCallback((e, idItem) => {
    let key;
    e.target.name === 'optionSelected' ? (key = 'channel') : (key = 'details');

    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === idItem ? {...contact, [key]: e.target.value} : contact
      )
    );
  }, []);

  const create = () => {
    setContacts([...contacts, createDefaultObj()]);
  };

  const remove = useCallback((idItem) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== idItem));
  }, []);

  const value = {
    contacts,
    setContacts,
    onChangeHandler,
    create,
    remove,
  };

  return (
    <ContactContext.Provider value={value}>
      <div className='grid-container'>
        <div>
          <Contacts />
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </ContactContext.Provider>
  );
}

export default App;
