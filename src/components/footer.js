import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Slider(){

return(
    <div className="footer-copyright text-center py-3">
        <hr    style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: .5,
            borderColor : '#000000'
        }} />
        <p>
          &copy; {new Date().getFullYear()} Copyright: Ray's Global Association | Designed By:<a href="https://www.mdbootstrap.com"> Maaz Abdullah </a>
        </p>
      </div>

)

}

export default Slider;