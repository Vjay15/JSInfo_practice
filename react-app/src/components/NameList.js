import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Vjay',
            yearOfJoining: 2020,
            department: 'Engineering'
        },
        {
            id: 2,
            name: 'Lax',
            yearOfJoining: 2021,
            department: 'Marketing'
        },
        {
            id: 3,
            name: 'King',
            yearOfJoining: 2019,
            department: 'Sales'
        }
    ]
    const personList = persons.map(person => (
        <Person key={person.id} person={person} />
    ))
  return (
    <div>{personList}</div>
  )
}

export default NameList