import React from 'react';

export default function RpgProject() {
  return (
    <div className="rpg-project-container">
      <p className="rpg-github">You can view the code on Github, just follow <a href="https://github.com/V-School-October/cyberpunk-rpg"><b>this</b></a> link! To view the live product, you can see it on <a href="http://cyberpunk2047.herokuapp.com/"><b>Heroku</b></a>.</p>
      <div className="character-screen">
        <img src={require('../images/rpg-images/characterscreen.png')}/>
        <p>Upon login, users are redirected to the character screen where they are able to view stats such as HP & Currency, as well as the current items in their inventory.</p>
      </div>
      <div className="shop-screen">
        <img src={require('../images/rpg-images/shopscreen.png')}/>
        <p>In the shop, users are able to purchase items with currency for use in battle.</p>
      </div>
      <div className="battle-screen">
        <img src={require('../images/rpg-images/battlescreen.png')}/>
        <p>In the battle screen, users are able to fight enemies for currency and item drops. There are two conditional renders, for the Game Over and Win screens, pictured below: </p>
        <img src={require('../images/rpg-images/winscreen.png')}/>
        <img src={require('../images/rpg-images/gameover.png')}/>
      </div>
    </div>
  )
}
