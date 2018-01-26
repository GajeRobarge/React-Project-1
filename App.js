import React, { Component } from 'react';
import Header from "./components/Header.jsx";
import Parent from "./components/parent";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Star Wars Characters!" />
      <Parent name='Anakin' />  
      </div>
    );
  }
}

export default App;
