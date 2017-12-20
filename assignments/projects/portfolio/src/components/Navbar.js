import React, {Component} from 'react';

export default class Navbar extends Component {
  render() {
    return(
      <nav>
        <div className="container clearfix">
          <h1 className="logo">LUKE OLIVER</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    )
  }
}
