import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import Form from './components/Form';
import PersonsList from './components/PersonsList';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('Fetched');
      setPersons(response.data);
    })
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
      alert(`${newName} is already in the list!`)
      return;
    }

    const newPersons = persons.concat({name: newName, number: newNumber});
    setPersons(newPersons);
    setNewName('');
    setNewNumber('');
  }

  const handleFilter = (e) => {
    setFiltered(e.target.value);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filtered={filtered} onFilter={handleFilter}/>
      <h2>Add new contact</h2>
      <Form onFormSubmit={handleFormSubmit} newName={newName} newNumber={newNumber} onNameInput={handleNameInput} onNumberInput={handleNumberInput}/>
      <h2>Numbers</h2>
      <PersonsList filtered={filtered} persons={persons}/>
    </div>
  )
}

export default App
