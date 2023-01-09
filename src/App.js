import React, {createContext, useCallback, useEffect, useState} from 'react';
import './App.css';
import Contacts from './contacts';
import Logo from './Logo';

export const ContactContext = createContext();

function App() {
  const [id, setId] = useState(1);

  const createDefaultObj = () => {
    const obj = {
      id: id,
      channel: 'none',
      details: '',
    };
    return obj;
  };

  const defaultObj = createDefaultObj();
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

  useEffect(() => {
    setId(() => id + 1);
  }, [contacts]);

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
