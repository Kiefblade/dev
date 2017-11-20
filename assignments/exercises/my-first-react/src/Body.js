import React from 'react';

function Body(){
  const styles = {
    headerdiv: {
      marginTop: "50px",
      textAlign: "center",
      backgroundColor: "#3B7F7A",
      height: "400px",
      position: "relative",
      backgroundImage: "url('https://leakynews.s3.amazonaws.com/pub/wp-content/uploads/2014/12/Ash-Bruce-Campbell-in-Army-of-Darkness-1992-This-is-my-Boomstick.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center 0px"
    }
  }
  return (
    <div style={styles.headerdiv} className="bodydiv">
      </div>
  )
}

export default Body;
