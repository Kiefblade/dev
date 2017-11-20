import React, {Component} from 'react';
import Input from './Input';
import Display from './Display';

class Body extends Component {
  render(){
    return (
      <Display />,
      <Input />
    )
  }
}

export default Body;
