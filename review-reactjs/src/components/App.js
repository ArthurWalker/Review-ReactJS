import React from 'react';
import Header from './sub_components/Header.js';
import Footer from './sub_components/Footer.js';

function App() {
  // Cant return more than 1 elements in a return function
  return (
    <div className="App">
      <h1>Components</h1>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
