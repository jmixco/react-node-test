import f from './components';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';

console.log("Hello world");

ReactDOM.render(<App />, document.getElementById('app'));

f();