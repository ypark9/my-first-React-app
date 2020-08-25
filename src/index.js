import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // APP Name is arbit...
import registerServiceWorker from './registerServiceWorker';

//react app usually have only one root component and we render only that one. SPA case.
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
