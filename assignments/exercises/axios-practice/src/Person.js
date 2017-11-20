import React from 'react';

function Person(props){
  const styles = {
    hitcard: {
      backgroundImage: `url(${props.info.image})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "300px",
      width: "50%",
      display: "inline-block",
      margin: "0 auto",
      position: "relative",
      border: "1px solid black"
    },
    cardHeader: {
      backgroundColor: 'rgba(0,0,0,.5)',
      margin: "0",
      width: '100%',
      color: "white",
      padding: "5px",
      textAlign: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%) "
    }
  }
  return (
  <div style={styles.hitcard}>
     <h1 style={styles.cardHeader}>{props.info.name}</h1>
  </div>
)};
  export default Person;
