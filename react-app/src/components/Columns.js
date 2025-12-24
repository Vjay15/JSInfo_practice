import React from 'react'

function Columns() {
    const items = [
        {
            id: 1,
            title: 'React Fundamentals'
        },
        {
            id: 2,
            title: 'Component Lifecycle'
        },
        {
            id: 3,
            title: 'State Management'
        },
        {
            id: 4,
            title: 'Props and Data Flow'
        }
    ]
  return (
    <React.Fragment>
        {
            items.map(item => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        <td>Name</td>
        <td>Vjay</td>
    </React.Fragment>
  )
}

export default Columns