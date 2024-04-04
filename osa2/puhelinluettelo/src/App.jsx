import { useState } from "react";


const Filter = ({ filter, setFilter }) => {    
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
        <div>
          Filter shown: <input
            value={filter}
            onChange={handleFilterChange}
          />
        </div>
  )
}

const AddPerson = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
    <form onSubmit={addPerson}>
      <div>
        name: <input 
          value={newName}
          onChange={handleNameChange}/>
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={handleNumberChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, filter }) => {

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter))

return (
    <div>
      {personsToShow.map(person => 
        <p>
          {person.name} {person.number}
        </p>
        )
      }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-123456789' 
    }
  ]) 

  const [filter, setFilter] = useState('')


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter 
        filter={filter} 
        setFilter={setFilter}
      />

      <h2>Add new</h2>

      <AddPerson 
        persons={persons} 
        setPersons={setPersons} 
      />

      <h2>Numbers</h2>

      <Persons persons={persons} filter={filter} />
    </div>
  )

}

export default App
