import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props){
  return(
    <div className="navbar">
        {/* <div className="navimage"></div> */}
        <Link className="navlinks" to="/home">Home</Link>
        <Link className="navlinks" to="/main">Cards</Link>
        <Link className="navlinks" to="/favorites">Favorites</Link>
    </div>
  )
}
