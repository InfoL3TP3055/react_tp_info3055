import React from "react";
import axios from 'axios';
import Fond from "../../images/background.jpg";



export class NewLocataire extends React.Component {

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
		const {username, password,nom, prenom,num_cni,profession,email,num_tel,ville,local} = this.state
		return (
			<div>
			<div style={{backgroundImage: 'url('+Fond+')',backgroundSize: "cover"}} >
		    		<div className="py-5"></div>		          	
		    		<div className="py-2"></div>		          	

		    	<div className="container-fluid d-flex justify-content-center">
				            

			            <div className="border rounded  col-lg-7 " style={{boxShadow: "0px 0px 9px darkgray"}}>
					            <form onSubmit={this.submitHandler} method='POST' >
					            	<h2 className="header text-center text-success py-3 " style={{fontFamily: 'initial'}}>Nouveau locataire</h2> 	
					                
								        <input type="text" name="nom" value={nom} onChange={this.changeHandler} placeholder="Entrez le nom du locataire "className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="text" name="prenom" value={prenom} onChange={this.changeHandler} placeholder="Entrez le prénom du locataire "className="rounded col-lg-12  my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
					                
								        <input type="text" name="username" value={username} onChange={this.changeHandler} placeholder="Entrez le username du locataire"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="email" name="email" value={email} onChange={this.changeHandler} placeholder="Entrez l'adresse email du locataire "className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="tel" name="num_tel" value={num_tel} onChange={this.changeHandler} placeholder="Entrez le numéro de téléphone du locataire"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="text" name="num_cni" value={num_cni} onChange={this.changeHandler} placeholder="Entrez le numéro de cni du locataire"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    
								        <input type="text" name="profession" value={profession} onChange={this.changeHandler} placeholder="Entrez la profession du locataire" className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    
								        <input type="text" name="ville" value={ville} onChange={this.changeHandler} placeholder="Entrez la ville du locataire"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								        <input type="text" name="local" value={local} onChange={this.changeHandler} placeholder="Entrez le nom du local choisi par le locataire"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="password" name="password" value={password} onChange={this.changeHandler} placeholder="Entrez le mot de passe du locataire" className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    
								        <input type="password" name="password" value={password} onChange={this.changeHandler} placeholder="Confirmez son mot de passe" className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								    
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

  
