import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Slider(props){
    const mystyle = {
        color: " White",
        backgroundColor: "DodgerBlue",
        opacity:"1",
        padding: "10px",
        fontFamily: "Arial",
        width:"25%",
        margin: "0px 0px 0px 340px"


      };
return(

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/3.jpg"
      alt="First slide"
    />
    <Carousel.Caption  style={{top:"360px"}}>
      <h1 style={mystyle}>{props.name}</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )

}

export default Slider;