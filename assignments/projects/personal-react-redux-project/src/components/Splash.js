import React from 'react';

export default function Splash(){
  return(
    <div className='splash'>
      <div className='splash-content'>
        <img src={require('../images/deckedlogo.svg')}/>
        <h1>MTG DECK-BUILDING TOOL</h1>
      </div>
    </div>
  )
}
