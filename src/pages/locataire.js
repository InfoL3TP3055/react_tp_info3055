import React from 'react';
import {Sidebar} from "../composants/sidebar";

                        
export class Locataire extends React.Component {
    render(){
        return (

            <div>
            <div className="container-fluid ">
            <div className='row'>
                    <div className='col-lg-2'  id="sidebar-wrapper">     
                      <Sidebar /></div>
                    
                   
            </div>   

             </div>

            </div>
            
           
        ); 
    }     
};
export default Locataire;