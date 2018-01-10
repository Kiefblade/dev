import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {getShop} from "../../redux/authentication";

class Shop extends Component {
  constructor(props){
  super(props)
    this.state = {
      shopInv: [
        {
          item: "Stimpak",
          price: 50,
          imgUrl: "https://i.imgur.com/qMSCeKF.png",
          description: "Boosts Damage for your next attack."
        },
        {
          item: "Health Pack",
          price: 75,
          imgUrl: "https://i.imgur.com/UN07H9D.png",
          description: "Restores user to full HP."
        },
        {
          item: "Blaster",
          price: 125,
          imgUrl: "https://i.imgur.com/sIKLKaL.png",
          description: "When a blade isn't enough.. +15 DMG to next attack."
        },
        {
          item: "Plasma Rifle",
          price: 175,
          imgUrl: "https://i.imgur.com/v17MKFD.png",
          description: "Turn your enemies into goop! +25 DMG to next attack."
        }
      ]

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item, i) {
    this.props.getShop(item);
    document.getElementsByClassName("bought")[i].innerHTML = `<p style='color: white;'>Item Purchased! Happy Hunting!</p>`;
  }
  render(){

    const shopInventory = this.state.shopInv.map((inventory, i) => {
      return (
        <div onClick={() => this.handleClick(inventory, i)} className="shop-inventory" key={inventory.item + i}>
          <h2>{inventory.item}</h2>
          <img src={inventory.imgUrl}/>
          <h5 className="item-price">PRICE: {inventory.price}</h5>
          <h5 className="item-description">{inventory.description}</h5>
          <span className="bought"></span>
        </div>
      )
    });

    return(
      <div className="shop-container">
        <h1 className="shop-title">CYBER SHOP</h1>
          <div className="shop-window">
            {shopInventory}
          </div>
          <Link to="/mainscreen"><button>RETURN</button></Link>
      </div>
    )
  }
}

export default connect(state => state, {getShop})(Shop)
