import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Login from './pages/Login';
//import Cadastro from './pages/Cadastro';
import CadastroQuestoes from './pages/CadastroQuestoes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CadastroQuestoes/>
      </div>
    );
  }
}

export default App;
