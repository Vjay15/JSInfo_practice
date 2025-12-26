import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentD() {
    const countCountext = useContext(CountContext)
  return (
    <div>
        <h2>ComponentD</h2>
        <button onClick={() => {countCountext.countDispatch('increment')}}>Increment</button>
        <button onClick={() => {countCountext.countDispatch('decrement')}}>Decrement</button>
        <button onClick={() => {countCountext.countDispatch('reset')}}>Reset</button>
    </div>
  )
}

export default ComponentD