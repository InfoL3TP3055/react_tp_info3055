import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Fond from "../images/fond.png";
import Navigation from "../composants/navbar";




export class Contact extends React.Component {
	render() {
		
		return (
			<div>
			<Navigation/>
			<div style={{backgroundImage: 'url('+Fond+')', backgroundSize:'cover'}} >

		    	<div className="container-fluid ">
		    		<div className="py-5"></div>
		    			<h2 className="header text-center text-success py-3 " style={{fontFamily: 'initial'}}>Contact</h2>
		    			<p className="header text-center text-muted fst-italic pt-3 " style={{fontFamily: 'initial'}}>Nous repondons tous les jours de 7h à 20h aux 666126432 ou 690411075. Laissez nous un message si besoin</p>

		          	<div className=" d-flex justify-content-center ">

			            <div className="border rounded py-2 " style={{boxShadow: "0px 0px 9px darkgray"}}>
			            <form>
			            <div className="row py-2 ">
			            	<div className="col-lg-6">
							<input type="text" name="nom" placeholder="Entrez votre Nom"className="rounded " style={{ height: '40px'}}></input>
			            	</div>
			            	<div className="col-lg-6 ms-auto">
							<input type="email" name="email" placeholder="Entrez votre Email" className="rounded " style={{ height: '40px'}}></input>
			            	</div>
			            </div>
			            <textarea className="col-lg-12 pt-4" placeholder="Message..."></textarea>
			            <div className="row">
								        <div className="pt-3">
								        	<button type="submit" className="btn col-lg-4  rounded  text-light" style={{backgroundColor: '#01D758'}}>Envoyer</button>
								        </div>
								    </div>
			            </form>
				            
			            </div>
			        </div>
			        <div className="py-4"></div>

		      	</div>
		    </div>
		    </div>
 		);
	}
}

  

