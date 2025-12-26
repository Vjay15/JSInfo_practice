import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentA() {
    const countCountext = useContext(CountContext)
  return (
    <div>
        <h2>ComponentA</h2>
        <button onClick={() => {countCountext.countDispatch('increment')}}>Increment</button>
        <button onClick={() => {countCountext.countDispatch('decrement')}}>Decrement</button>
        <button onClick={() => {countCountext.countDispatch('reset')}}>Reset</button>
    </div>
  )
}

export default ComponentA