import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCards} from '../../redux/cards'
import {addToFavorites} from '../../redux/favorites'

class Cards extends Component {
  constructor(){
    super();
    this.state = {
      search: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(card, i) {
    this.props.addToFavorites(card);
    document.getElementsByClassName("addedHeading")[i].innerText = '+Added Card+';
  }
  // componentDidMount(){
  //   this.props.addCards(this.props.cards, this.state);
  // }

  render() {
    const set = this.props.cards.map((card, i) => {
        return (
          <div className = "card-art" key={card.name + i}>
            <img onClick={() => {this.handleClick(card, i)}} className = "card-image" src={card.imageUrl}/>
            <h5 className="card-title">{card.name}</h5>
            <h5>Set: {card.setName}</h5>
            <span className="addedHeading"></span>
          </div>
        )}
    )
    return(
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
    )
  }
}

export default connect(state => state, {addCards, addToFavorites})(Cards)
