import React from 'react';
import {connect} from "react-redux";
import {addToFavorites} from "../redux/favorites";

function Favorites(props){
  const favorites = props.favoriteCards.map((favorite, i) => {
    return(
      <div className = "card-art" key={favorite.name + i}>
        <img className = "card-image" src={favorite.imageUrl}/>
        <h4 className="card-title">{favorite.name}</h4>
        <h5>Set: {favorite.setName}</h5>
      </div>
    )
  })

  return (
    <div>
      {favorites}
    </div>
  )
}

export default connect(state => state, {addToFavorites})(Favorites)
