import React from 'react'

export const ChildThree = ({children,name}) => {
  console.log('Child Render')
  return (
    <div>
        ChildThree Component
        <br></br>
        {children} {name}
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)