import React, {Component} from 'react';

class BackgroundDisplay extends Component {
  constructor(){
    super();
    this.state = {
      backgroundColor: 'black'
    }
    this.changeColor = this.changeColor.bind(this)
  }

  // changeColor(){
  //   this.setState(prevState=>({
  //     return {this.state.backgroundColor: 'black'}
  //   }))
  // }

  render(){
    return <button OnClick={this.changeColor}>Color Swap</button>
  }
}


export default Background;
