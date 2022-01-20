import React from 'react';
import {Sidebarbailleur} from "../composants/sidebarbailleur";
import NavigationD from "../composants/navbarD";


                        
export class Bailleur extends React.Component {
    render(){
        return (
                        


            <div>
            <NavigationD/>
            <div className="container-fluid ">
            <div className='row'>
                    <div className='col-lg-2 p-0'  id="sidebar-wrapper">     
                      <Sidebarbailleur/></div>
                    
                   
            </div>   

             </div>

            </div>
            
           
        ); 
    }     
};
export default Bailleur;