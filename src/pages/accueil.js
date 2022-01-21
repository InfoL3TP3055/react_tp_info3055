import React from 'react';
import Livreur from "../images/mai.jpg";
import fond from "../images/courbe.svg";
import Navbar from '../composants/navbar';
import Logo from "../images/cle.webp";
import Colis from "../images/log.svg";
import Lgo from "../images/home.svg";
import Location from '../composants/location';


export class Accueil extends React.Component {

    render(){
        return (

            <div>
                <Navbar/>
                <div className="py-4"></div>

                <div className="d-flex align-items-center" style={{backgroundImage: 'url('+Livreur+')',backgroundSize: "cover", height: "590px", backgroundAttachment:"fixed"}} >
                <div className="row">
                <div className="py-5"></div>                    
                    <div className="cadre rounded col-lg-11">  
                        <h2 className="d-flex justify-content-left ms-3 text-white cadre col-lg-8" style={{fontFamily: 'initial', fontSize:'50px', backgroundAttachment:"fixed"}}>SERVICE DE LOCATION D'IMMOBILIERS</h2>
                        <h3 className="d-flex justify-content-left ms-3 text-white cadre col-lg-8" style={{fontFamily: 'lobster', backgroundAttachment:"fixed"}}>Trouvez facilement tous les locaux dont vous avez besoin à moindres coûts</h3>
                    </div>
                </div>
                </div> 
                <div className="d-flex align-items-center justify-content-center vague" style={{backgroundImage: 'url('+fond+')',backgroundColor:'', height: "100px",backgroundSize: "cover"}} >
               
                </div>
                <div className="py-3"></div>
                <div className="container-fluid ">
                    <div className="row">
                        <h2 className="connexion" style={{fontFamily:'Lobster',color:'#01D758'}}>QUI SOMMES NOUS ?</h2>
                        <p style={{fontFamily:'initial'}}>Compte tenu de la difficulté qu’ont la plupart des bailleurs camerounais à gérer leur locaux immobiliers, House-Location est une application web qui vient aider ces derniers dans cette difficile et lourde tache en automatisant les taches telles que la gestion des locataires
                        ,des laucaux, la signature de contrat et l'impression de reçus. Le locataire pourra via son compte consulter l'état de son compte et communiquer avec le bailleur par l'application, il pourra également consulter les locaux disponibles et faire une reservation

                          Avec nous tout client  bénéficie d’un gain en temps 
                        grâce à nos services fiables.</p>
                    </div>
                    <h1 className="connexion pt-5" style={{fontFamily:'Lobster',color:'#01D758'}}>Comment ça marche ?</h1>
                    <h5 className="connexion py-3 text-success" style={{fontFamily:'Lobster'}}>A.Si vous êtes bailleur</h5>

                    <div className="row">
                        <img className="col-lg-5" style={{height:'300px',width:'300px'}} src={Logo} alt="Logo" />
                        <div className='col-lg-6 ms-auto'>
                            <h2 className='pt-5 '>01.Inscription</h2>
                            <p className='fw-bold'>Commencez par créer votre compte pour bénéficier de nos services. Vous obtiendrez un identifiant unique qui vous permettra d'utiliser
                             conformement l'application</p>
                            <a href='inscription'><button type="button" className="btn col-lg-3 text-light connexion rounded-pill" style={{backgroundColor: '#01D758'}}>Inscrivez-vous</button></a>

                        </div>
                    </div>
                        <div className="row py-5">
                            <div className='col-lg-6 '>
                                <h2 className='pt-5 '>02.Connexion</h2>
                                <p className='fw-bold'>Une fois votre compte crée,cliquez sur le bouton de connexion puis renseignez votre login et votre mot de passe puis
                                 accédez à la plate forme qui vous est reservée pour effectuer toutes vos opérations.</p>
                                <a href='/connexion'><button type="button" className="btn col-lg-3 text-light connexion rounded-pill" style={{backgroundColor: '#01D758'}}>Connectez-vous</button></a>
                            </div>
                            <img className="col-lg-5 ms-auto" style={{height:'350px',width:'350px'}} src={Colis} alt="" />

                        </div>
                        <div className="row py-5">
                            <img className="col-lg-5 rounded py-2" style={{height:'250px',width:'350px'}} src={Lgo} alt="Logo" />
                            <div className='col-lg-6 ms-auto'>
                                <h2 className='pt-5 '>B.En tant que locataire</h2>
                                <p className='fw-bold'>Un locataire non connecté peut faire une reservation et contacter le bailleur. Une fois connecté, il pourra désormais avoir accès aux informations relatives à son compte</p>
                            </div>
                        </div>
                        <div className="row " id='resa' >
                        <Location className='col-lg-6 '/>
                        </div>
                        <div >
                            <h1 className="pt-5" id='avtg' style={{fontFamily:'monospace'}}>Avantages</h1>
                            <h2 className='pt-4 text-success'>Gérer seul son bien immobilier avec House-Location</h2>
                            <h5>House-Location vous donne tous les outils professionnels et vous assiste avec la gestion de votre bien. Optimisez votre rendement locatif. Nous sommes là pour vous aider!</h5>
                            <h2 className='pt-4 text-success'>Pourquoi gérer seul son bien ?</h2>
                            <h5> Optimisez votre rendement locatif et évitez de payer des frais inutiles !
                                Vous pouvez vous occuper de A à Z de la location de votre bien immobilier. Pourquoi ? Parce que vous y gagnez en rentabilité en réduisant les frais de gestion mais aussi parce qu'aucun professionnel de l’immobilier ne prendra autant de soin que le propriétaire à tout bien gérer.</h5>
                            <h2 className='pt-4 text-success'> Pourquoi choisir House-Location?</h2>
                            <h5>Nous sommes les moins chers, les plus dynamiques, très à l'écoute et hyper sympa... Nous vous offrons un service de qualité fiable </h5>
                           

                        
                        </div>


                    
                </div>
                <div className="py-5"></div>
                    

            </div>
        );
    }
};

export default Accueil;
