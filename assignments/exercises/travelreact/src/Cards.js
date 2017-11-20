import React from 'react';
import Card from './Card';

function Cards(){
  const spots = [
  {
    place: "Meridian, Idaho",
    price: "$40",
    timeToGo: "Spring",
    imgSrc: "http://www.buildidaho.com/Documents%20and%20Settings/54/Site%20Documents/Subdivision%20Logos/Meridian%20Idaho/Northwest-Meridian-Idaho.jpg"
  },{
    place: "Cancun",
    price: "$900",
    timeToGo: "Winter",
    imgSrc: "http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1482960529/header-cancun-hotel-zone-CANCUNALLIN0117.jpg?itok=_g2R_RQn"
  },{
    place: "China",
    price: "$1200",
    timeToGo: "Fall",
    imgSrc: "http://www.telegraph.co.uk/content/dam/Travel/Cruise/worlds-most-beautiful-ports/hongkong-harbour-xlarge.jpg"
  },{
    place: "Russia",
    price: "$1100",
    timeToGo: "Summer",
    imgSrc: "http://www.buildidaho.com/Documents%20and%20Settings/54/Site%20Documents/Subdivision%20Logos/Meridian%20Idaho/Northwest-Meridian-Idaho.jpg"
  },{
    place: "Lebanon",
    price: "$400",
    timeToGo: "Spring",
    imgSrc: "http://www.buildidaho.com/Documents%20and%20Settings/54/Site%20Documents/Subdivision%20Logos/Meridian%20Idaho/Northwest-Meridian-Idaho.jpg"
  }
]
  return spots.map((spot) => {
      return <Card place={spot.place}
                   price={spot.price}
                   timeToGo={spot.timeToGo}
                   imgSrc={spot.imgSrc}
             />
  })
}
export default Cards;
