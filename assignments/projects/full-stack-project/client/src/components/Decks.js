import React, {Component} from 'react';
import {connect} from "react-redux";
import {getDeck, postCards} from "../redux/postdeck"

class Decks extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getDeck();
  }

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
    const decks = this.props.deckPost.map((deck) => {
      return(
        <div className = "deck-art" key={deck.id}>
          <img alt="A card, idiot." className="deck-image" src={require("../images/mtgback.jpg")}/>
          <h4 className="deck-title">{deck.name}</h4>
        </div>
      )
    })
    return (
        <div className="card-box deck-box">
          {decks}
        </div>

    )}
  }

export default connect(state => state, {getDeck, postCards})(Decks)
