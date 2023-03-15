import React from 'react'
import { Container } from "react-bootstrap";

function hero() {
    const divStyle = {
        
        background: `radial-gradient(circle, rgba(0, 0, 0, 0.15) 70%, rgba(0, 0, 0, 0.15) 70%), url(${"https://i.imgur.com/999OMP2.jpeg"})`,
    height: "550px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    filter: "brightness(90%)"
      };
      const containerStyle = {
        width: "100%",
        height: "40%",
      };
      const headerStyle = {
        color: "white",
    textAlign: "center",
    fontFamily: "cursive",
    fontSize: "3em",
    marginTop: "35px",
    fontWeight: "bold",
    textShadow: "2px 2px #000000"
      };
      return (
        <><div></div><Container fluid style={containerStyle}>
              <div style={divStyle}><h1 style={headerStyle}>Mushrooms are the Future</h1></div>
              
          </Container></>
      );
   
}

export default hero