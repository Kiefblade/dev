import React from 'react';
import {connect} from 'react-redux';

import {increment, decrement} from '../redux/counter';

function App(props){
  return(
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.counter}</span>
      <button onClick={props.increment}>+</button>
    </div>
  )
}

function mapStateToProps(state){
    return state;
}

const AppContainer = connect(mapStateToProps, {increment, decrement})(App);
export default AppContainer;
