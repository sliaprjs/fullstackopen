import { useState, useEffect } from 'react';
import axios from 'axios';

import services from './services/services';

import Filter from './components/Filter';
import Form from './components/Form';
import PersonsList from './components/PersonsList';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    services.getContacts().then(initialContacts => setPersons(initialContacts));
  }, [])
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtered, setFiltered] = useState('');

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  }

  const handleNumberInput = (e) => {
    setNewNumber(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (persons.find(person => person.name === newName)) {
      const confirmation = window.confirm('Number is already added. Replace old number?');

      const doubleContact = persons.find(person => person.name === newName);
      const newDetails = {...doubleContact, number: newNumber};

      if (confirmation) {
        services.updateContact(doubleContact.id, newDetails).then(changedContact => {
          setPersons(persons.map(p => p.id !== doubleContact.id ? p : changedContact))
        })
      }
      return;
    }

    services.addContact({name: newName, number: newNumber}).then(newContact => {
      const newPersons = persons.concat(newContact);
      setPersons(newPersons);
      setNewName('');
      setNewNumber('');
    })
  }

  const handleFilter = (e) => {
    setFiltered(e.target.value);
  }

  const handleDelete = (id) => {
    const confirmation = window.confirm('Are you sure?');
    if (confirmation) {
      services.deleteContact(id).then(
        setPersons(persons.filter(p => p.id !== id))
      )
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filtered={filtered} onFilter={handleFilter}/>
      <h2>Add new contact</h2>
      <Form onFormSubmit={handleFormSubmit} newName={newName} newNumber={newNumber} onNameInput={handleNameInput} onNumberInput={handleNumberInput}/>
      <h2>Numbers</h2>
      <PersonsList filtered={filtered} persons={persons} onDelete={handleDelete}/>
    </div>
  )
}

export default App
