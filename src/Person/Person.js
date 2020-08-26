import React from 'react'; //need to have to return JSX
//props and state are core concept of React. 
//actually only changes in props and/or state trigger React to re-render 
// and update the DOM in the browser.

const person = (props) => { //ES6
return (
    <div>
        <p>I am {props.name} and {props.age} years old!</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person;