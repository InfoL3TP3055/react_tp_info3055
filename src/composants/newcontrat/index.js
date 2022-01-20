import React from "react";
import axios from 'axios';
import Fond from "../../images/background.jpg";



export class NewContrat extends React.Component {

	constructor(props){
		super(props)

		this.state = {
			username: '',
			password: '',
		}
	}

changeHandler = (e) => {
	this.setState({[e.target.name]: e.target.value})
}

submitHandler = e => {
	e.preventDefault()
	console.log(this.state)
	axios
	.post()
		.then(response => {
			console.log(response)

		})
		.catch(error => {
			console.log(error)
		})
}

	render() {
		const {id_contrat, id_local,prix,titre, date_ent} = this.state
		return (
			<div>
			<div style={{backgroundImage: 'url('+Fond+')',backgroundSize: "cover"}} >
		    		<div className="py-5"></div>		          	
		    		<div className="py-2"></div>		          	

		    	<div className="container-fluid d-flex justify-content-center">
				            

			            <div className="border rounded  col-lg-7 " style={{boxShadow: "0px 0px 9px darkgray"}}>
					            <form onSubmit={this.submitHandler} method='POST' >
					            	<h2 className="header text-center text-success py-3 " style={{fontFamily: 'initial'}}>Nouveau contrat</h2> 	
					                
								        <input type="number" name="id_contrat" value={id_contrat} onChange={this.changeHandler} placeholder="Entrez l'Id du contrat"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="number" name="id_local" value={id_local} onChange={this.changeHandler} placeholder="Entrez l'Id du local"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
					                
								        <input type="number" name="prix" value={prix} onChange={this.changeHandler} placeholder="Entrez le montant mensuel" className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
												   

								        <input type="text" name="titre" value={titre} onChange={this.changeHandler} placeholder="Entrez le titre du contrat"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								        <textarea type="text" name="description"  onChange={this.changeHandler} placeholder="Description..."className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3'}}></textarea>
								        <p className="text-left pt-2">Date d'entrée du locataire:</p>
								        <input type="date" name="date_ent" value={date_ent} onChange={this.changeHandler} className="rounded col-lg-12 " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>

								        <div className="py-3">
								        	<button type="submit" className="btn col-lg-4  rounded  text-light" style={{backgroundColor: '#01D758'}}>Ajouter</button>
								        </div>
								   
					        	</form>
					        </div> 			
			            </div>
			       
			        <div className="py-4"></div>

		      	</div>
		   
		    </div>
 		);
	}
}

  
