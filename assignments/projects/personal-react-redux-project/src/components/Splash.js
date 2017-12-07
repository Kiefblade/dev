import React from 'react';

export default function Splash(){
  return(
    <div className='splash'>
      <div className='splash-content'>
        <img src={require('../images/black.svg')}/>
        <h1>DECKED OUT</h1>
        <h3>MTG Deck-Building Tool</h3>
      </div>
    </div>
  )
}
