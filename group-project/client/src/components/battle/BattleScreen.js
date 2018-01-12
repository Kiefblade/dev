import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {logout} from "../../redux/authentication";
import {getEnemy} from "../../redux/enemy";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerHp: this.props.auth.hp,
      isEnemyDead: false,
      isPlayerDead: false,
      selectedEnemy: {},
      isFighting: false,
      enemies: [
        {
          name: "Stim Addict",
          hp: 25,
          damage: function() {
            return Math.floor(Math.random() * 10);
          },
          imgUrl: "https://i.imgur.com/HBfYeeg.png",
          inventory: [{
            "item": "Stimpak",
			      "price": 50,
			      "imgUrl": "https://i.imgur.com/qMSCeKF.png",
			      "description": "An item to regain HP.",
          }],
          "currency": 20
        },
        {
          name: "Bender",
          hp: 75,
          damage: function() {
            return Math.floor(Math.random() * 20)
          },
          imgUrl: "https://i.imgur.com/oXMZohT.gif",
          inventory: [{
            "item": "Plasma Rifle",
			      "price": 175,
			      "imgUrl": "https://i.imgur.com/v17MKFD.png",
			      "description": "Turn your enemies into goop! +25 DMG to next attack.",
          }],
          "currency": 60
        },
        {
          name: "Mini Battle-Bot",
          hp: 50,
          damage: function() {
            return Math.floor(Math.random() * 15)
          },
          imgUrl: "https://i.pinimg.com/originals/a4/2d/fa/a42dfafbce8fb26e56f698a8bc14da5b.gif",
          inventory: [{
            "item": "Blaster",
			      "price": 125,
			      "imgUrl": "https://i.imgur.com/sIKLKaL.png",
			      "description": "When a blade isn't enough.. +15 DMG to next attack.",

          }],
          "currency": 40
        }
      ]
    }
  }

  enemyAttack(e) {
    if(this.state.selectedEnemy.hp <= 0) {
      this.enemyDeath();
    }
    this.props.auth.hp -= this.state.selectedEnemy.damage();
    this.setState({
      playerHp: this.props.auth.hp,
    })
    // console.log("Player Health: ", this.props.auth.hp);
  }

  enemyDeath() {
    if(this.state.selectedEnemy.hp <= 0) {
      this.setState({
        isFighting: false,
        isEnemyDead: true
      })
    }
  }

  playerDeath() {
    if(this.state.playerHp <= 0) {
      this.setState({
        isFighting: false,
        isPlayerDead: true
      })
    }
  }

  handleAttack(e) {
    if(this.state.playerHp >= 0) {
      this.state.selectedEnemy.hp -= this.props.auth.damage;
      this.enemyAttack();
    } else if(this.props.auth.hp <= 0) {
      this.playerDeath();
    }
  }

  handleFight(e) {
    this.setState({
      isFighting: true,
      selectedEnemy: this.state.enemies[Math.floor(Math.random() * this.state.enemies.length)]
    });
  }

  render() {
    if (this.state.isFighting) {
      if (this.state.selectedEnemy.name === "Stim Addict") {
        document.querySelector('.enemy-image').style.width = "35%";
      } else {
        document.querySelector('.enemy-image').style.width = "65%";
      }
    }
    return (
      <div className="battle-container">
        <ul className="battle-buttons">
          {this.state.isFighting ? <li><button onClick={this.handleAttack.bind(this)}>ATTACK</button></li> : null}
          {this.state.isFighting ? null : <li><button id="fight-button" onClick={this.handleFight.bind(this)}>FIGHT</button></li>}
          {this.state.isFighting ? <li><button>ONLY COWARDS RUN</button></li> : <li><Link to="/mainscreen"><button>RETURN</button></Link></li>}
        </ul>
        <div className="player-character">
          <img src={require('../../media/images/player-character.png')}/>
          <p>{this.props.auth.username.toUpperCase()}</p>
        </div>
        <div className="damage-container">
          <h2 className="damage-log">DAMAGE LOG</h2>
          <div className="damage-window">
            <span className="damage-info">{this.props.auth.hp <= 0 ? <p>Player Health: 1/100</p> : <p>Player Health: {this.state.playerHp}/100</p>}</span>
            <p>Enemy Health: {this.state.selectedEnemy.hp}</p>
          </div>
        </div>
        <div className="enemy-character">
          {this.state.selectedEnemy !== null ? <div><img className="enemy-image" src={this.state.selectedEnemy.imgUrl}/><p className="enemy-info">{this.state.selectedEnemy.name}</p></div> : null}
        </div>
          {this.state.isPlayerDead ? <div className="win-loss player-death"><Link to="/"><button onClick={() => this.props.logout()} id="game-over">GAME OVER</button></Link></div> : null}
          {this.state.isEnemyDead ? <div className="win-loss enemy-death"><h2 className="return-title">OH MY GOD, YOU KILLED HIM</h2><Link to="/mainscreen"><button id="return-button">RETURN</button></Link><div className="item-drops"><img className="item-img" src={this.state.selectedEnemy.inventory[0].imgUrl}/><p>Currency: {this.state.selectedEnemy.currency}</p></div></div> : null}
      </div>
    )
  }
}

export default connect(state => state, {logout, getEnemy})(Battle);
