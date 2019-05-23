import React from 'react';

export default function MagicBuilder() {
  return (
    <div className="mtg-project-container">
      <p className="mtg-github">You can view the code on my Github, just follow <a href="https://github.com/Kiefblade/dev/tree/master/assignments/projects/full-stack-project"><b>this</b></a> link!</p>
      <div className="splash-screen">
        <img src={require('../images/mtg-images/splash.png')}/>
        <p>Splash Screen for the app.</p>
      </div>
      <div className="card-screen">
        <img src={require('../images/mtg-images/cardscreen.png')}/>
        <p>Pulls from the official Magic: The Gathering API, and is also filterable by mana color. Users can click on individual cards to add them to the Redux store, which is then posted to the server as an array of objects when they submit the deck at the bottom of the page.</p>
      </div>
      <div className="deck-screen">
        <img src={require('../images/mtg-images/deckscreen.png')}/>
        <p>Users may utilize this view to review their saved decks. Each mapped component has an on click function to map through the objects and render them all separately in another app view.</p>
      </div>
    </div>
  )
}
