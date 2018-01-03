import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCards} from '../../redux/cards'
import {addToFavorites} from '../../redux/favorites'
import {postCards} from '../../redux/postdeck'

class Cards extends Component {
  constructor(){
    super();
    this.state = {
      search: "",
      name: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deckSubmit = this.deckSubmit.bind(this);
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.addCards(this.props.cards, this.state.search);
    this.setState({
      search: ""
    })
  }
  deckSubmit(e){
    e.preventDefault();
    this.props.postCards(this.props.favoriteCards, this.state.name);
    this.setState({
      name: ""
    })
  }

  handleClick(handedCard, i) {
    let count = 0;
    for(let i = 0; i < this.props.favoriteCards.length; i++) {
      if(this.props.favoriteCards[i].id === handedCard.id) {
        count++;
      }
    }
    if (this.props.favoriteCards.length >= 60){
      return document.getElementsByClassName("addedHeading")[i].innerHTML = '<p style="background-color: rgba(0, 0, 0, 0.6); border-radius: 5px; font-size: 20px; padding: 10px;" className="renderedPlus">Deck Limit Reached.</p>';
    } else if (count >= 4) {
        return document.getElementsByClassName("addedHeading")[i].innerHTML = '<p style="background-color: rgba(0, 0, 0, 0.6); border-radius: 5px; font-size: 20px; padding: 10px;" className="renderedPlus">Max Amount of this card in deck.</p>';
    }
     else {
        this.props.addToFavorites(handedCard);
        return document.getElementsByClassName("addedHeading")[i].innerHTML = '<p style="background-color: rgba(0, 0, 0, 0.6); border-radius: 5px; font-size: 20px; padding: 10px;" className="renderedPlus">Added Card!</p>';
    }
  }
  render() {
    const set = this.props.cards.map((card, i) => {
        return (
          <div className = "card-art" key={card.name + i}>
            <img onClick={() => {this.handleClick(card, i)}} className = "card-image" src={card.imageUrl} alt="Cards, idiot."/>
            <h5 className="card-title">{card.name}</h5>
            <h5>Set: {card.setName}</h5>
            <span className="addedHeading"></span>
          </div>
        )}
    )
    return(
      <div className="cardpage">
        <form className='button-form' onSubmit = {this.handleSubmit}>
          <button className='red' name='search' value ="red" onClick = {this.handleChange}></button>
          <button className='white' name='search' value ="white" onClick = {this.handleChange}></button>
          <button className='blue' name='search' value ="blue" onClick = {this.handleChange}></button>
          <button className='black' name='search' value ="black" onClick = {this.handleChange}></button>
          <button className='green' name='search' value ="green" onClick = {this.handleChange}></button>
          <main className = "card-box">
              {set}
          </main>
        </form>
        <div className="form-container">
          <div className="deckform">
            <input type="text" className="deckinput" placeholder="Enter a deck name." name="name" value={this.state.name} onChange={this.handleChange} />
            <button onClick={this.deckSubmit} className="deckbutton">Submit Deck!</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state, {addCards, addToFavorites, postCards})(Cards)
