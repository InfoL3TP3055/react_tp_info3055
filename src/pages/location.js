import React from 'react';
import {Carousell} from "../composants/carousel";
import Fond from "../images/background.jpg";


                        
export class Location extends React.Component {
    render(){
        return (
            <div>
            <div style={{backgroundImage: 'url('+Fond+')', backgroundSize:'cover'}} >

            <div className="container-fluid ">
                <div className="py-5"></div>
                <h2 className="text-center py-3" style={{fontFamily: 'initial'}}>Locaux disponibles</h2>
                <p className="text-center pb-3" style={{fontFamily: 'initial'}}>Consultez nos locaux et reservez ce qui vous convient le mieux.</p>
                <div className='row'>
                    <div className='col-lg-3 border-right'><Carousell/>
                    <p className='text-left'>Type: Appartement</p>
                    <p className='text-left'>Nombre de pièces: 07</p>
                    <p className='text-left'>Ville: Yaoundé</p>
                    <p className='text-left'>Quartier: Bastos</p>
                    <h5 className='text-danger'>Prix: 200 000FCFA/mois</h5>
                    <div className="row">
                        <div className="py-3">
                            <button type="submit" className="btn col-lg-4  rounded text-light" style={{backgroundColor: '#01D758'}}>Reserver</button>
                        </div>
                    </div>
                    <div className="pt-4"></div>

                    </div>
                    <div className='col-lg-3 border-right '><Carousell/>
                        <p className='text-left'>Type: Studio</p>
                        <p className='text-left'>Nombre de pièces: 04</p>
                        <p className='text-left'>Ville: Yaoundé</p>
                        <p className='text-left'>Quartier: Jouvence</p>
                        <h5 className='text-danger'>Prix:70 000FCFA/mois</h5>
                        <div className="row">
                        <div className="py-3">
                            <button type="submit" className="btn col-lg-4  rounded text-light" style={{backgroundColor: '#01D758'}}>Reserver</button>
                        </div>
                    </div>
                    </div>

                    <div className='col-lg-3 border-right'><Carousell/>
                    <p className='text-left'>Type: Maison</p>
                    <p className='text-left'>Nombre de pièces: 06</p>
                    <p className='text-left'>Ville: Yaoundé</p>
                    <p className='text-left'>Quartier: Nkomo</p>
                    <h5 className='text-danger'>Prix: 150 000FCFA/mois</h5>
                    <div className="row">
                        <div className="py-3">
                            <button type="submit" className="btn col-lg-4  rounded text-light" style={{backgroundColor: '#01D758'}}>Reserver</button>
                        </div>
                    </div>
                    <div className="pt-4"></div>
                    </div>

                    <div className='col-lg-3 '><Carousell/>
                    <p className='text-left'>Type: Appartement</p>
                    <p className='text-left'>Nombre de pièces: 06</p>
                    <p className='text-left'>Ville: Yaoundé</p>
                    <p className='text-left'>Quartier: Etoudi</p>
                    <h5 className='text-danger'>Prix: 190 000FCFA/mois</h5>
                    <div className="row">
                        <div className="py-3">
                            <button type="submit" className="btn col-lg-4  rounded text-light" style={{backgroundColor: '#01D758'}}>Reserver</button>
                        </div>
                    </div>
                    <div className="pt-4"></div>
                    </div>
                </div>

            </div>  
                <div className="py-5"></div>

            </div>
            </div>
        ); 
    }     
};
export default Location;