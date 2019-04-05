import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cadastro/>
      </div>
    );
  }
}

export default App;
