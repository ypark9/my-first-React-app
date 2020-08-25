import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  //react calles this method to render html to DOM
  render() {
    return (
      /////////JSX, not html (syntetic sugar)
      // class cannot be used because reserved in js.
      <div className="App"> 
        <h1>Hi, I am React App.</h1>
        <p>This is really working!</p>
        <Person name="Yoonsoo" age = "30"> My hobbies : programming </Person>
        <Person name= "Laura" age = "23"> My hobbies : Traphez </Person>
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
