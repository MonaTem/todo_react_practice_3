import React, { Component } from 'react';
import './App.css';
import ToDoForm from './ToDoForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoForm/>
      </div>
    );
  }
}

export default App;
