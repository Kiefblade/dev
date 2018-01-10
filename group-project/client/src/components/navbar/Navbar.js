import React, {Component} from 'react';
import {connect} from "react-redux";
import {logout} from '../../redux/authentication'
import {Link} from 'react-router-dom';

class Navbar extends Component{

  handleLogOut(e){
    this.props.logout();
  }

  render(){
    return(
      <div className="navbar">
        <Link to="/"><button onClick={this.handleLogOut = this.handleLogOut.bind(this)}>LOGOUT</button></Link>
      </div>
    )
  }
}

export default connect(null, {logout})(Navbar);
