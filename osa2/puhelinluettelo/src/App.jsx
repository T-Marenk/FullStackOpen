import { useState, useEffect } from "react"
import personService from './services/persons'
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

  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber
    }

    const person = persons.find(p => p.name == personObject.name)

    if (typeof person === 'undefined') {
      personService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      return
    }

    const changedPerson = {...person, number: newNumber}

    updatePerson(changedPerson)
  }

  const updatePerson = person => {
    if (confirm(`${person.name} is already in the phonebook, replace the old number with the new one?`)) {
      personService
        .update(person.id, person)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
              alert(`Person ${person.name} has already been deleted`)
              setPersons(persons.filter(p => p.id !== id))
            }
          )
    }
  }

  const deletePerson = (id, name) => {
    if (confirm(`Delete ${name}?`)) {
      personService
        .erase(id)
          .then(returnedData => {
           setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          alert(
            `the person ${name} was already deleted from the server`
          )
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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

      <Persons
        persons={persons}
        personsToShow={personsToShow}
        deletePerson={deletePerson} />
    </div>
  )

}

export default App
