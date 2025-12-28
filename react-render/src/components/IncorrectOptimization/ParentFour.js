import React,{useMemo, useState} from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
  const [count,setCount] = useState(0)
  const [name,setName] = useState('Vjay')
  console.log('Parent Render')
  const person = {
    fname:'Bruce',
    lname:'Wayne'
  }
  const memoizedPerson = useMemo(() => person,[])
  const handleClick = () => {}
  return (
    <div>
        <button onClick={() => setCount(c => c+1)}>Count = {count}</button>
        <button onClick={() => setName('Lakshman')}>Change name</button>
        <MemoizedChildFive name={name} person={memoizedPerson}  />
        {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
        </MemoizedChildThree> */}
    </div>
  )
}
