import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Fond from "../images/inscrip.svg";
import Navigation from "../composants/navbar";




export class Inscription extends React.Component {

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
		const {username, password,nom, prenom,num_cni,profession,email,num_tel,ville} = this.state
		return (
			<div>
			<Navigation/>
			<div style={{backgroundImage: 'url('+Fond+')',backgroundSize: "cover"}} >

		    	<div className="container-fluid ">
		    		<div className="py-5"></div>
		        	<div className="py-2"></div>		            
		          	<div className="d-flex justify-content-center">

			            <div className="border col-lg-6 rounded " style={{boxShadow: "0px 0px 9px darkgray"}}>
				            <div className="row">
					            <form onSubmit={this.submitHandler} method='POST'>
					            	<h2 className="header text-center py-3 " style={{fontFamily: 'initial'}}>Inscription</h2> 	
					            	<p className="text-center  text-success fst-italic" style={{fontFamily: 'initial'}}>Inscrivez-vous en tant que bailleur!</p>
					                <div className="row m-2 ">
								        <input type="text" name="nom" value={nom} onChange={this.changeHandler} placeholder="Entrez votre Nom"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-2">
								        <input type="text" name="prenom" value={prenom} onChange={this.changeHandler} placeholder="Entrez votre Prénom"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
					                <div className="row m-2 pt-2">
								        <input type="text" name="username" value={username} onChange={this.changeHandler} placeholder="Entrez votre Username"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-2">
								        <input type="email" name="email" value={email} onChange={this.changeHandler} placeholder="Entrez votre adresse email"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-2">
								        <input type="tel" name="num_tel" value={num_tel} onChange={this.changeHandler} placeholder="Entrez votre niméro de téléphone"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-2">
								        <input type="text" name="num_cni" value={num_cni} onChange={this.changeHandler} placeholder="Entrez votre numéro de cni"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-2">
								        <input type="text" name="profession" value={profession} onChange={this.changeHandler} placeholder="Quelle est votre profession ?"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-2">
								        <input type="text" name="ville" value={ville} onChange={this.changeHandler} placeholder="Dans quelle ville résidez-vous?"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-2">
								        <input type="password" name="password" value={password} onChange={this.changeHandler} placeholder="Entrez votre mot de passe" className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-2">
								        <input type="password" name="password" value={password} onChange={this.changeHandler} placeholder="Confirmez votre mot de passe" className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row">
								        <div className="py-3">
								        	<button type="submit" className="btn col-lg-4  rounded  text-light" style={{backgroundColor: '#01D758'}}>S'inscrire</button>
								        </div>
								    </div>
					        	</form>
					        </div> 			
			            </div>
			        </div>
			        <div className="py-4"></div>

		      	</div>
		    </div>
		    </div>
 		);
	}
}

  
