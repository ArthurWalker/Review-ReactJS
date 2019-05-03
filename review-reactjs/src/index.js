import React from 'react';
// ReactDom is used to render components into Virtual Dom which makes React web app runs faster
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
// The main component contains all other components
import App from './components/App';

// ReactDom.render will take component <App/> and put into the element root tag from index.html
// The first parameter in ReactDom.render accepts only 1 element so all of actions will happen inside <App />
// The second parameter in ReactDom.render accepts only 1 element 
// The tag which has the first capital letter will stand for components while lowercase letter stands for an element
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
