import React, { useEffect } from 'react';
import "./App.css";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import ContactDetail from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }
  
  useEffect(() => {
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retreiveContacts) setContacts(retreiveContacts);

  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <Router>
        <Header/>
        
        <Routes>
            <Route
              path='/add'
              element={<AddContact addContactHandler={addContactHandler} />}
            />
            <Route
              path='/'
              element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
            />
            <Route 
              path='/contact/:id' 
              element={<ContactDetail/>}
            />
        </Routes>


        {/* // <AddContact addContactHandler={addContactHandler}/>
        // <ContactList contacts = {contacts} getContactId={removeContactHandler}/> */}
      </Router>
      
    </div>
    
    
  );
}

export default App;
