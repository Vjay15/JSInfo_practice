import React,{useState} from 'react'
import {ChildTwo, MemoizedChildTwo} from './ChildTwo'

export const ParentTwo = () => {
  const [count,setCount] = useState(0)
  const [name,setName] = useState('Vjay')
  console.log('Parent Render')
  return (
    <div>
        <button onClick={() => setCount(c => c+1)}>Count = {count}</button>
        <button onClick={() => setName('Lakshman')}>Change name</button>
        <MemoizedChildTwo name={name}/>
    </div>
  )
}
