import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import MainHeader from './components/MainHeader'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainHeader />
      </div>
    );
  }
}

export default App;
