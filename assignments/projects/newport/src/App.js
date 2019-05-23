import React, { Component } from 'react';
import Header from './components/Header';
import Splash from './components/Splash';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Splash />
        <AboutMe />
        <Portfolio />
      </div>
    );
  }
}

export default App;
