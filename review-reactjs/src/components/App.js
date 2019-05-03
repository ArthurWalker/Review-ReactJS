import React from 'react';
import Header from './sub_components/Header.js';
import Footer from './sub_components/Footer';
import Main from './sub_components/Main';

//NOTE:
// We are using EX6 syntax to write the code instead of Javascript

// These 2 ways of writing are similar
// const App = () => 
function App() {
  // Cant return more than 1 elements in a return function
  return (
    // Using classname to access DOM. For example: document.getElementById('something').className+='new-class'
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
