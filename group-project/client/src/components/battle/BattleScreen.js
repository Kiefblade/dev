import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enemies: [
        {
          name: "Stim Addict",
          hp: 25,
          damage: function() {
            return Math.floor(Math.random() * 10);
          },
          imgUrl: "",
          inventory: []
        },
        {
          name: "Bender",
          hp: 50,
          damage: function() {
            return Math.floor(Math.random() * 20)
          },
          imgUrl: "https://i.imgur.com/oXMZohT.gif",
          inventory: []
        },
        {
          name: "Mini Battle-Bot",
          hp: 50,
          damage: function() {
            return Math.floor(Math.random() * 20)
          },
          imgUrl: "https://i.pinimg.com/originals/a4/2d/fa/a42dfafbce8fb26e56f698a8bc14da5b.gif",
          inventory: []
        }
      ]
    }
  }

  attackEnemy(e) {

  }

  enemyAttack(e) {

  }

  die(e) {

  }

  handleAttack(e) {
    while(this.props.auth.hp >= 0) {
      
    }
  }
  render() {
    return (
      <div className="battle-container">
        <ul className="battle-buttons">
          <li><button onClick={this.handleAttack.bind(this)}>ATTACK</button></li>
          <li><button>RETREAT</button></li>
          <li><Link to="/mainscreen"><button>RETURN</button></Link></li>
        </ul>
        <div className="player-character">
          <img src={require('../../media/images/player-character.png')}/>
        </div>
        <div className="damage-container">
          <h2 className="damage-log">DAMAGE LOG</h2>
          <div className="damage-window">
          </div>
        </div>
        <div className="enemy-character">
          <img src={require("../../media/images/crackouthobo.png")}/>
        </div>
      </div>
    )
  }
}

export default connect(state => state, null)(Battle);
