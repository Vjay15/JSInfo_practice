import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Vishwas</h1> #This is JSX
    //     </div>
    // )
    return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'Hello Vjay'));
}

export default Hello;