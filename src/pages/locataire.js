import React from 'react';
import {Sidebar} from "../composants/sidebar";
import NavigationD from "../composants/navbarD";


                        
export class Locataire extends React.Component {
    render(){
        return (

            <div>
            <NavigationD/>
            <div className="container-fluid ">
            <div className='row'>
                    <div className='col-lg-2 p-0'   id="sidebar-wrapper">     
                      <Sidebar /></div>
                    
                   
            </div>   

             </div>

            </div>
            
           
        ); 
    }     
};
export default Locataire;