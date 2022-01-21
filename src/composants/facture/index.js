import React from 'react';
                        
export class Facture extends React.Component {
    render(){
        return (

            <div>
             <div className='py-5'></div>
             <div class="container-fluid">
            <h1 className=" py-4 text-center" style={{ color: '#01D758' ,fontFamily: 'monospace'}}>Facture</h1>

            <div class="card col-lg-12" >
                <div class="card-header text-center text-success">HOUSE-LOCATION</div>
                <div class="card-body text-left ">
                    <p>Facture N0: 0006698556205555</p>

                    <p>Nom du locataire: EKOKO BERNARD JOEL </p>
                    <p>Nom du local: </p>
                    <p>Nom du local: </p>
                    
                </div>
            </div>
            <div className="d-flex justify-content-center pt-4">
                <button type="submit" className="btn  rounded connexion text-light " style={{backgroundColor: '#4CAF50'}}>Imprimer</button>
            </div>
        </div>


             

            </div>
            
           
        ); 
    }     
};
export default Facture;