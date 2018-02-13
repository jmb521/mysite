import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import MainHeader from './components/MainHeader'
import Projects from './components/Projects'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />

            <Route exact path="/" component={MainHeader} />
            <Route exact path="/projects" components={Projects} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
