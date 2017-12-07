import React from 'react';

const styles = {
  textAlign: "center",
  background: "#ff9966",  /* fallback for old browsers */
  background: "-webkit-linear-gradient(to right, #ff5e62, #ff9966)",  /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #ff5e62, #ff9966)",
  fontFamily: "Arial, sans-serif",
  margin: "0",
  padding: "0",
  color: "whitesmoke" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

export default function Header(props){
  return(
    <header style={styles}>
      <h1>Contacts</h1>
    </header>
  )
}
