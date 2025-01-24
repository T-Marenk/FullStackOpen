import { useState, useEffect } from "react"
import axios from "axios"
import Persons from './components/Persons'
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'


const App = () => {
  const [persons, setPersons] = useState([]) 

  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    console.log('haku')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('haettu')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name == personObject.name)) {
      alert(`${newName} is already in the phonebook`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange}
      />

      <h2>Add new</h2>

      <AddPerson 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} personsToShow={personsToShow} />
    </div>
  )

}

export default App
