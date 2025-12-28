import React from 'react'

export const ChildTwo = () => {
  console.log('Child Render')
  return (
    <div>
        ChildTwo Component
    </div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)