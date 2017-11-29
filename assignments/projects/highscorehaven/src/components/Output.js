import React from 'react';

export default function Output(props){
  return(
    <div className="outputs">
      <h2 className="player">Player Name: {props.score.name}</h2>
      <hr/>
      <h2 className="player">Game: {props.score.game}</h2>
      <h3>Date: {props.score.date}</h3>
      <h3>High-Score: {props.score.highScore}</h3>
      <h3>Trash Talk: {props.score.talkShit}</h3>
    </div>
  )
}
