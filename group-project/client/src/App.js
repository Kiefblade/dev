import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainScreen from "./components/gamescreen/MainScreen";
import Shop from "./components/shop/Shop";
import BattleScreen from "./components/battle/BattleScreen";

export default function App(){
  return(
    <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/mainscreen" component={MainScreen} />
          <Route path="/shop" component={Shop} />
          <Route path="/battlescreen" component={BattleScreen} />
        </Switch>
        <Footer />
    </main>

  )
}
