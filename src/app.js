import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 

// sample of transform-class-properties plugin babel

// class NewSyntax {
// 	nameOfP = 'Jen';
// }
// const newSyntax = new NewSyntax(); 
// console.log(newSyntax);