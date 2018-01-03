import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Cards from './components/cardpage/Cards';
import Decks from './components/Decks';
import Splash from './components/Splash';
import Deck from './components/Deck'


export default function App(props){
  return (
    <main>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Splash}/>
          <Route path="/main" component={Cards}/>
          <Route path="/favorites" component={Decks}/>
          <Route path="/home" component={Splash}/>
      </Switch>
    </main>
  )
}
