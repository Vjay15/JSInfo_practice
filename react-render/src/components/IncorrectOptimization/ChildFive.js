import React from 'react'

export const ChildFive = ({name,person,handleClick}) => {
  console.log('ChildFive Render')
  return (
    <div>
        Hello {name} {person.fname} {person.lname} {handleClick}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)