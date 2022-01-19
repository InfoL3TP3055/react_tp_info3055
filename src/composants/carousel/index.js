import React from 'react';
import cham from "../../images/chambre.jpeg";
import cuisine from "../../images/cuisine.jpeg";
import douche from "../../images/douche.jpeg";
import salon from "../../images/salon.jpeg";
import veranda from "../../images/veranda.jpeg";

import Carousel from 'react-bootstrap/Carousel';


                        
export class Carousell extends React.Component {
    render(){																																																																																																																																																																																																																																																																																																																																																																																									
        return (
            <div>
            <Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src={salon} alt="First slide"/>
  </Carousel.Item>
  <Carousel.Item>
   	<img className="d-block w-100" src={cham} alt="2 slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={cuisine} alt="3 slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={douche} alt="5 slide"/>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={veranda} alt="6 																																																																																																																																																																																																																																																												slide"/>
  </Carousel.Item>
</Carousel>
                
            </div>
        ); 
    }     
};
export default Carousell;
