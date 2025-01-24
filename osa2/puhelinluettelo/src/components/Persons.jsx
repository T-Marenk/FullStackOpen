const Persons = ({ persons, personsToShow, deletePerson }) => {

return (
    <div>
      {personsToShow.map(person => 
        <p>
          {person.name} {person.number}
          &nbsp;<button onClick={() => deletePerson(person.id, person.name)}>Delete</button>
        </p>
        )
      }
    </div>
  )
}

export default Persons
