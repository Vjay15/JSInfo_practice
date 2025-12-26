import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComponentF() {
    const countCountext = useContext(CountContext)
  return (
    <div>
        <p>ComponentF</p>
        <button onClick={() => {countCountext.countDispatch('increment')}}>Increment</button>
        <button onClick={() => {countCountext.countDispatch('decrement')}}>Decrement</button>
        <button onClick={() => {countCountext.countDispatch('reset')}}>Reset</button>
    </div>
  )
}

export default ComponentF