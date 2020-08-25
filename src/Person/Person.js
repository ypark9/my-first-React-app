import React from 'react'; //need to have to return JSX

const person = (props) => { //ES6
return <p>I am {props.name} and {props.age} years old!</p>
};

export default person;