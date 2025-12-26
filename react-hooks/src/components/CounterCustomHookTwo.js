import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterCustomHookTwo() {
    const [count,increment,decrement,reset] = useCounter()
  
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterCustomHookTwo