import React from 'react';
import {connect} from "react-redux";
import {getDeck} from "../redux/postdeck"

function DecksMap(props){
  const decks = props.deckPost.map((deck) => {
    return(
      <div className = "deck-art" key={deck.id}>
        <img alt="A card, idiot." className="deck-image" src={require("../images/mtgback.jpg")}/>
        <h4 className="deck-title">{deck.name}</h4>
      </div>
    )
  })
  return (
    {decks}
  )
}

export default connect(state => state, {getDeck})(DecksMap)
