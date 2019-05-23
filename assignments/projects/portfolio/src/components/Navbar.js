import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return(
      <nav>
        <div className="container clearfix">
          <h1 className="logo">LUKE OLIVER</h1>
          <div className="nav-links">
            <Link to="/"><button className="nav-button">Home</button></Link>
          </div>
        </div>
      </nav>
    )
  }
}
