import React from 'react';
import {Sidebar} from "../composants/sidebar";

import {Location} from "../composants/location";
import NavigationD from "../composants/navbarD";


                        
export class Locataire extends React.Component {
    render(){
        return (

            <div>
            <NavigationD/>
            <div className="container-fluid ">
            <div className='row'>
                    <div className='col-lg-2 p-0'  id="sidebar-wrapper">     
                      <Sidebar /></div>
                    
                    <div className='offset-lg-1 col-lg-9 d-flex justify-content-center' id="page-content-wrapper">
                        <Location/>
                    </div>
            </div>   

             </div>

            </div>
            
           
        ); 
    }     
};
export default Locataire;