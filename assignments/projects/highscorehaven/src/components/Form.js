import React, {Component} from 'react';
import Output from './Output';

export default class Form extends Component{
  constructor(){
    super();
    this.state = {
      name: "",
      game: "",
      date: "",
      highScore: "",
      isChecked: false,
      scores: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleInput(e){
  if (e.target.type === "checkbox"){
    this.setState({isChecked: e.target.checked});
  } else {
    this.setState({[e.target.name]: e.target.value});
  }
}

talkShit(e){
  const shit = ["Embarrassing, truly.", "Why did I even bother posting this?", "This score is straight up water trash."]
  return shit[Math.floor(Math.random() * shit.length)];
}

handleSubmit(e){
  e.preventDefault();
  this.setState(prevState => {
      let trash = this.talkShit();
      if (!this.state.isChecked){
        trash = "";
      }
      prevState.scores.push({
        name: prevState.name,
        game: prevState.game,
        date: prevState.date,
        highScore: prevState.highScore,
        isChecked: prevState.isChecked,
        talkShit: trash
      })
      return {scores: prevState.scores};
    });
  }

  render(){
    const display = this.state.scores.map((score, index) => {
      return <Output key={score + index} score={score} />
    });
    return(
      <div className="main">
        <div className="header">
          <form>
            <h1 className="pagename">HIGH-SCORE HAVEN</h1>
            <input name="name" onChange={this.handleInput} placeholder="Your Name:" required/>
            <input name="game" onChange={this.handleInput} placeholder="Game Title:" required/>
            <input name="date" type="date" onChange={this.handleInput} required/>
            <input name="highScore" type="number" onChange={this.handleInput} placeholder="Your score:" required/>
            <label>Trash talk?</label>
            <input name="isChecked" type="checkbox" onChange={this.handleInput} className="checkit" required/>
            <button name="Submit" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
        <div className="components">
          {display}
        </div>
      </div>
    )
  }
}
