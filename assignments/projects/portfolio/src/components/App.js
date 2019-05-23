import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import MainBody from './MainBody';
import MagicBuilder from './MagicBuilder';
import RpgProject from './RpgProject';
import '../styles/styles.css'

export default function App() {
    return (
      <main className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainBody} />
          <Route path="/rpg-project" component={RpgProject} />
          <Route path="/mtg-project" component={MagicBuilder} />
        </Switch>
        {/* <Footer /> */}
      </main>
    );
}
