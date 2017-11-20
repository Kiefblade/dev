import React from 'react';

function Card(props){
  return(
    <div className="vacation">
      <h1 className="places">{props.place}</h1>
      <h2 className="prices">Price: {props.price}</h2>
      <h3 className="times">Best Time To Visit: {props.timeToGo}</h3>
      <img className="images" src={props.imgSrc}/>
    </div>
  )
}

export default Card;
