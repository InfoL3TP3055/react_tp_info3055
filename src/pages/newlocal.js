import React from 'react';
import {Sidebarbailleur} from "../composants/sidebarbailleur";

import {NewLocal} from "../composants/newlocal";

                        
export class NouveauLoc extends React.Component {
    render(){
        return (

            <div>
            <div className="container-fluid ">
            <div className='row'>
                    <div className='col-lg-2 p-0'  id="sidebar-wrapper">     
                      <Sidebarbailleur /></div>
                    
                    <div className='offset-lg-1 col-lg-9 d-flex justify-content-center' id="page-content-wrapper">
                        <NewLocal/>
                    </div>
            </div>   

             </div>

            </div>
            
           
        ); 
    }     
};
export default NouveauLoc;