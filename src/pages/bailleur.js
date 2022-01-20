import React from 'react';
import {Sidebarbailleur} from "../composants/sidebarbailleur";

                        
export class Bailleur extends React.Component {
    render(){
        return (

            <div>
            <div className="container-fluid ">
            <div className='row'>
                    <div className='col-lg-2'  id="sidebar-wrapper">     
                      <Sidebarbailleur/></div>
                    
                   
            </div>   

             </div>

            </div>
            
           
        ); 
    }     
};
export default Bailleur;