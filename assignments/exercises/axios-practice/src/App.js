import React, {Component} from 'react';
import axios from 'axios';
import Person from './Person';
import './app.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      hits: []
    }
  }
  componentDidMount(){
    axios.get("http://api.vschool.io:6543/hitlist.json").then((response)=>{
      this.setState({hits: response.data});
    })
  }
  render(){
    const styles = {
      width: "1024px",
      margin: "0 auto"
    }
    return (
      <div style={styles}>
        <div className="header">
          <h1 className="title">Hit List</h1>
        </div>
        {this.state.hits.map(person=>{
          return <Person info={person} />
        })}
      </div>
    )
  }
}

export default App;
