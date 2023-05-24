import React from 'react'

const PersonsList = ({filtered, persons}) => {
  return (
    filtered ? persons.filter(person => person.name.toLowerCase().includes(filtered.toLowerCase())).map(person => <p key={person.name}>{person.name} {person.number}</p>) : persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)
  )
}

export default PersonsList