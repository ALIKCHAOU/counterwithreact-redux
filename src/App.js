import React, { Component } from 'react';
import './App.css';
import  Counter from './Counter';


import Store from './Store/'
class App extends Component {
  
  render() {
    return (
      <div className="App">
       <Counter store={Store}/>
      </div>
    );
  }
}

export default App;
