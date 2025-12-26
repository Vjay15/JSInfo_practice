import React,{useState} from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')
    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>First Name</label>
            <input {...bindFirstName}></input>
            <label>Last Name</label>
            <input {...bindLastName}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UserForm