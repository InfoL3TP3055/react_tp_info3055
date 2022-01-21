import React from 'react';
import {Carousell} from "../../composants/carousel";
import Fond from "../../images/background.jpg";
import Top from "../../images/top.png";


                        
export class Location extends React.Component {
    render(){
        return (
                        <div style={{backgroundImage: 'url('+Fond+')', backgroundSize:'cover'}} >

            <div>


            <div className="container-fluid ">
                <div className="py-5"></div>
                <form role="search" >
                <div class="input-group border col-lg-5 ms-auto bg-light" >
                    <input type="text" class="form-control bg-transparent border-0 " placeholder="  Rechercher un local"/>
                        <div class="input-group-btn ms-auto ">
                            <button type="submit" class="btn btn-default ">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                </div>
            </form> 
                
                <h2 className="text-center py-3" style={{fontFamily: 'initial'}}>Locaux disponibles</h2>
                <p className="text-center pb-3" style={{fontFamily: 'initial'}}>Consultez nos locaux et reservez ce qui vous convient le mieux.</p>
                <div className='row'>
                    <div className='col-lg-3 border-right'><Carousell/>
                    <p className='text-left'>Type: Appartement</p>
                    <p className='text-left'>Nombre de pièces: 07</p>
                    <p className='text-left'>Ville: Yaoundé</p>
                    <p className='text-left'>Quartier: Bastos</p>
                    <h5 className='text-danger text-center'>Prix: 200 000FCFA/mois</h5>
                    <div className="row">
                        <div className="py-3 d-flex justify-content-center">
                            <button type="submit" className="btn col-lg-6  rounded text-light" style={{backgroundColor: '#01D758'}}>Reserver</button>
                        </div>
                    </div>
                    <div className="pt-4"></div>

                    </div>
                    <div className='col-lg-3 border-right '><Carousell/>
                        <p className='text-left'>Type: Studio</p>
                        <p className='text-left'>Nombre de pièces: 04</p>
                        <p className='text-left'>Ville: Yaoundé</p>
                        <p className='text-left'>Quartier: Jouvence</p>
                        <h5 className='text-danger text-center'>Prix:100 000FCFA/mois</h5>
                        <div className="row">
                        <div className="py-3 d-flex justify-content-center">
                            <button type="submit" className="btn col-lg-6  rounded text-light" style={{backgroundColor: '#01D758'}}>Reserver</button>
                        </div>
                    </div>
                    </div>

                    <div className='col-lg-3 border-right'><Carousell/>
                    <p className='text-left'>Type: Maison</p>
                    <p className='text-left'>Nombre de pièces: 06</p>
                    <p className='text-left'>Ville: Yaoundé</p>
                    <p className='text-left'>Quartier: Nkomo</p>
                    <h5 className='text-danger text-center'>Prix: 150 000FCFA/mois</h5>
                    <div className="row">
                        <div className="py-3 d-flex justify-content-center">
                            <button type="submit" className="btn col-lg-6  rounded text-light" style={{backgroundColor: '#01D758'}}>Reserver</button>
                        </div>
                    </div>
                    <div className="pt-4"></div>
                    </div>

                    <div className='col-lg-3 '><Carousell/>
                    <p className='text-left'>Type: Appartement</p>
                    <p className='text-left'>Nombre de pièces: 06</p>
                    <p className='text-left'>Ville: Yaoundé</p>
                    <p className='text-left'>Quartier: Etoudi</p>
                    <h5 className='text-danger text-center'>Prix: 190 000FCFA/mois</h5>
                    <div className="row">
                        <div className="py-3 d-flex justify-content-center">
                            <button type="submit" className="btn col-lg-6  rounded text-light" style={{backgroundColor: '#01D758'}}>Reserver</button>
                        </div>
                        
                    </div>
                    <div className="pt-4"></div>
                    </div>
                </div>

            </div>  
            <div style={{position:'fixed',width: '25px',height: '25px', bottom: '50px', right: '30px'}}>
                <a href="#top"><img src={Top} alt="Retourner en haut" height="40px;" width="60px" /></a>
            </div>
                <div className="py-5"></div>

            </div>
            </div>
        ); 
    }     
};
export default Location;