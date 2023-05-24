import { useState } from 'react'
import Filter from './components/Filter';
import Form from './components/Form';
import PersonsList from './components/PersonsList';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

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
