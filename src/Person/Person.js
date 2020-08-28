import React from 'react'; //need to have to return JSX
//props and state are core concept of React.
//actually only changes in props and/or state trigger React to re-render
// and update the DOM in the browser.
import './Person.css';

const person = (props) => {
	//ES6
	return (
		<div className="Person">
			<p onClick={props.click}>
				I am {props.name} and {props.age} years old!
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.change} />
		</div>
	);
};

export default person;
