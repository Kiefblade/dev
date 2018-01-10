import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class MainScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const styles = {
      width: "75px",
      height: "75px"
    }
console.dir(this.props.auth);
    const playerInv = this.props.auth.inventory.map((item, i) => {
      return (
        <div key={item + i} className="inventory-list">
          <p>{item.item}</p>
          <li><img style={styles} src={item.imgUrl}/></li>
          <p className="inventory-description">{item.description}</p>
        </div>
      )
    });

    return (
      <div className="screen-container">
        <div className="main-left">
          <ul className="main-nav">
            <li><button>CHARACTER</button></li>
            <li><Link to="/shop"><button>SHOP</button></Link></li>
            <li><Link to="/battlescreen"><button>BATTLE</button></Link></li>
          </ul>
        </div>
        <div className="char-info-container">
          <div className="char-info">
            <h2 className="char-info-header">{this.props.auth.username}</h2>
            <img className="char-image" src={require("../../media/images/player-character.png")} />
            <ul className="inventory">
                {playerInv}
            </ul>
            <h3>Health: {this.props.auth.hp} / 100</h3>
            <h3>Damage: {this.props.auth.damage}</h3>
            <h3>Currency: {this.props.auth.currency}</h3>
          </div>
        </div>
    </div>
    )
  }
}

export default connect(state => state, null)(MainScreen);
