import React from 'react';
import {Sidebarbailleur} from "../composants/sidebarbailleur";
import NavigationD from "../composants/navbarD";


import {NewLocataire} from "../composants/newlocataire";

                        
export class NouveauLocataire extends React.Component {
    render(){
        return (

            <div>
            <NavigationD/>
            <div className="container-fluid ">
            <div className='row'>
                    <div className='col-lg-2 p-0'  id="sidebar-wrapper">     
                      <Sidebarbailleur /></div>
                    
                    <div className='offset-lg-1 col-lg-9 d-flex justify-content-center' id="page-content-wrapper">
                        <NewLocataire/>
                    </div>
            </div>   

             </div>

            </div>
            
           
        ); 
    }     
};
export default NouveauLocataire;