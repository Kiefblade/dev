import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
// import Body from './Body';
import Portfolio from './Portfolio';
import '../styles/styles.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Portfolio />
        {/* <Footer /> */}
      </div>
    );
  }
}
