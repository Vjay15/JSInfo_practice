import React from 'react'

const Greet = (props) => { // the props can be destructured if required
    console.log(props);
    return (
    <div>
        <h1>Hello {props.name} aka {props.heroName}</h1>
        {props.children}
    </div>
    )
}
export default Greet