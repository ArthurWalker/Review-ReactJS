import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// The main component contains all other components
import App from './App';
import * as serviceWorker from './serviceWorker';


// ReactDom.render will take component <App/> and put into the element root tag from index.html
// The first parameter in ReactDom.render accepts only 1 element so all of actions will happen inside <App />
// The second parameter in ReactDom.render accepts only 1 element 
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
