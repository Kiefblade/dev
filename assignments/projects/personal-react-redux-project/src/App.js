import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Cards from './components/cardpage/Cards';
import Favorites from './components/Favorites';
import Splash from './components/Splash';


export default function App(props){
  return (
    <main>
      <Navbar/>
      <Switch>
          <Route path="/main" component={Cards}/>
          <Route path="/favorites" component={Favorites}/>
          <Route path="/home" component={Splash}/>
      </Switch>
    </main>
  )
}
