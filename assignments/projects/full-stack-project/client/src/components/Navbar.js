import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props){
  return(
    <div className="navbar">
      <div className="container">
        <img src={require("../images/deckedoutbanner.png")} className="navimage" alt="" />
          <Link className="navlinks" to="/home">Home</Link>
          <Link className="navlinks" to="/main">Cards</Link>
          <Link  onClick={()=> props.getDeck()} className="navlinks" to="/favorites">Decks</Link>
        </div>
    </div>
  )
}
