import React from 'react';

function Thumb(props){
  const styles = {
    backgroundColor: 'black',
    height: '150px',
    color: 'white',
    textAlign: 'center'
  }
  return(
    <div style={styles}>
      <p>{props.description}</p>
    </div>
  )
}

export default Thumb;
