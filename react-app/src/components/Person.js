import React from 'react'

function Person(props) {
  const { name, yearOfJoining, department } = props.person
  return (
    <div>
        <h2>Name: {name} - Department: {department} - Year of Joining: {yearOfJoining}</h2>
    </div>
  )
}

export default Person