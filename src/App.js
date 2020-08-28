import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	//props and state are core concept of React.
	//actually only changes in props and/or state trigger React to re-render
	// and update the DOM in the browser.
	state = {
		people: [ { name: 'Yoonsoo', age: 36 }, { name: 'Laura', age: 29 } ]
	};

	onClickHandler = (newName) => {
		this.setState({
			people: [ { name: newName, age: 35 }, { name: 'Laura Park', age: 29 } ]
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			people: [ { name: event.target.value, age: 35 }, { name: 'Laura Park', age: 29 } ]
		});
	};

	//react calles this method to render html to DOM
	render() {
		//inline style
		const style = {
			backGroudColor: 'white',
			font: 'inherit',
			border: '1x solid blue',
			padding: '8px',
			cursor: 'Pointer'
		};

		return (
			/////////JSX, not html (syntetic sugar)
			// class cannot be used because reserved in js.
			<div className="App">
				<h1>Hi, I am React App.</h1>
				<p>This is really working!</p>
				<button style={style} onClick={() => this.onClickHandler('YOPA from the button')}>
					{' '}
					Click me!{' '}
				</button>
				<Person
					name={this.state.people[0].name}
					age={this.state.people[0].age}
					click={this.onClickHandler.bind(this, 'YOPA MAN')}
					change={this.nameChangedHandler}
				>
					My hobbies : programming{' '}
				</Person>
				<Person name={this.state.people[1].name} age={this.state.people[1].age}>
					My hobbies : Traphez{' '}
				</Person>
			</div>
			//<h1> another heading </h1> - we can't do this. only one root
		);
		////////  Above code becomes to below by the compiler. wow. *****
		// return React.createElement(
		//   'div', null,
		//   React.createElement(
		//     'h1', {className : 'App'/* any css class in here. */} /*passing JS object here. */, 'Is it working?'
		//   )
		// );
	}
}
//if you import this file you import App automatically because it is 'default'
export default App;

//React hook
//import React { useState } from 'react';
// const app = props => {
//   useState()
//   render() {

//     return (
//     /////////JSX, not html (syntetic sugar)
//     // class cannot be used because reserved in js.
//     <div className="App">
//       <h1>Hi, I am React App.</h1>
//       <p>This is really working!</p>
//       <button onClick = {this.onClickHandler}> Click me! </button>
//       <Person name= {this.state[0].name} age = {this.state[0].age}> My hobbies : programming </Person>
//       <Person name= {this.state[1].name} age = {this.state[1].age}> My hobbies : Traphez </Person>
//     </div>
//     //<h1> another heading </h1> - we can't do this. only one root
//   );
// }
