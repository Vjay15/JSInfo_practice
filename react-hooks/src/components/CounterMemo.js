import React, {useState,useMemo} from 'react'

function CounterMemo() {
  const [counterOne,setCounterOne] = useState(0)
  const [counterTwo,setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }
  
  
  const isEven = useMemo(() => {
    let i = 0
    while(i<200000000) i+=1
    return counterOne%2 ? "is Odd" : "is Even"
  },[counterOne])
  return (
    <div>
        <button onClick={incrementOne}>Count of one - {counterOne}</button>
        <span>{isEven}</span>
        <br></br>
        <button onClick={incrementTwo}>Count of two - {counterTwo}</button>
        <span></span>
    </div>
  )
}

export default CounterMemo