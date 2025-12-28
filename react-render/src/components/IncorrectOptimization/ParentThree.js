import React,{useState} from 'react'
import {ChildThree, MemoizedChildThree} from './ChildThree'
import { MemoizedChildFour } from './ChildFour'

export const ParentThree = () => {
  const [count,setCount] = useState(0)
  const [name,setName] = useState('Vjay')
  console.log('Parent Render')
  return (
    <div>
        <button onClick={() => setCount(c => c+1)}>Count = {count}</button>
        <button onClick={() => setName('Lakshman')}>Change name</button>
        <MemoizedChildFour name={name} />
        {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
        </MemoizedChildThree> */}
    </div>
  )
}
