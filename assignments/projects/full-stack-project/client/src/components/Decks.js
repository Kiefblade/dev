import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDeck, postCards} from "../redux/postdeck"
import DecksMap from './DecksMap';

class Decks extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   this.props.getDeck();
  // }

  // handleClick(deck) {
  //   const deckMap = deck.map((card) => {
  //     return (<div className = "card-art" key={card.name + i}>
  //       <img className ="card-image" src={card.imageUrl} alt="Cards, idiot."/>
  //       <h5 className="card-title">{card.name}</h5>
  //       <h5>Set: {card.setName}</h5>
  //       <span className="addedHeading"></span>
  //     </div>)
  //   })
  //   return deckMap;
  // }

  render(){
    return (
        <div className="card-box deck-box">
          <DecksMap />
        </div>

    )}
  }

export default connect(state => state, {getDeck, postCards})(Decks)
