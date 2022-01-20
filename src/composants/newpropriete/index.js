import React from "react";
import axios from 'axios';
import Fond from "../../images/background.jpg";



export class NewPropriete extends React.Component {

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
		const {id, quartier,secteur,nombre_locaux, nom,ville,} = this.state
		return (
			<div>
			<div style={{backgroundImage: 'url('+Fond+')',backgroundSize: "cover"}} >
		    		<div className="py-5"></div>		          	
		    		<div className="py-2"></div>		          	

		    	<div className="container-fluid d-flex justify-content-center">
				            

			            <div className="border rounded  col-lg-7 " style={{boxShadow: "0px 0px 9px darkgray"}}>
					            <form onSubmit={this.submitHandler} method='POST' >
					            	<h2 className="header text-center text-success py-3 " style={{fontFamily: 'initial'}}>Nouvelle propriété</h2> 	
					                
								        <input type="number" name="id" value={id} onChange={this.changeHandler} placeholder="Entrez l'Id de la propriété "className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="text" name="nom" value={nom} onChange={this.changeHandler} placeholder="Entrez le nom de la propriété  "className="rounded col-lg-12  my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
					                
								        <input type="text" name="ville" value={ville} onChange={this.changeHandler} placeholder="Entrez le nom de la ville"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="text" name="quartier" value={quartier} onChange={this.changeHandler} placeholder="Entrez le quartier "className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="text" name="secteur" value={secteur} onChange={this.changeHandler} placeholder="Entrez le nom du secteur"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="number" name="nombre_locaux" value={nombre_locaux} onChange={this.changeHandler} placeholder="Combien de locaux compte votre propriété?"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    
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

  
