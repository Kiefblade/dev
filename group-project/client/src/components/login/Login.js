import React, {Component} from 'react';
import {connect} from "react-redux";
import {signup, login} from "../../redux/authentication";
import {Link} from "react-router-dom";

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuthenticated: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.signup({username: this.state.username, password: this.state.password});
    this.setState({
      username: "",
      password: ""
    })
  }

  handleLogin(e) {
    this.props.login({username: this.state.username, password: this.state.password});
    this.setState({
      username: "",
      password: ""
    });
  }

  render(){
    return(
      <div className="loginscreen">
        <div className="gametitle">
          <h1>TITLE</h1>
        </div>
      <form className="loginform">
        <input name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
        <input name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        <div className="buttoncontainer">
          <button type="button" onClick={this.handleSignup.bind(this)}>SIGNUP</button>
          <Link to="/mainscreen"><button type="button" onClick={this.handleLogin.bind(this)}>LOGIN</button></Link>
        </div>
      </form>
    </div>
    )
  }
}

export default connect(state => state, {signup, login})(Login);
