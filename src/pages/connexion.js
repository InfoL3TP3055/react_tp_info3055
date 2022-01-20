import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Fond from "../images/fond.png";
import Navigation from "../composants/navbar";




export class Connexion extends React.Component {

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
		const {username, password} = this.state
		return (
			<div>
			<Navigation/>
			<div style={{backgroundImage: 'url('+Fond+')', backgroundSize:'cover'}} >

		    	<div className="container-fluid ">
		    		<div className="py-5"></div>
		          	<div className="d-flex justify-content-center">	
			            <div className="border col-lg-4 rounded " style={{boxShadow: "0px 0px 9px darkgray"}}>
				            <div className="row">
					            <form onSubmit={this.submitHandler} method='POST'>
					            	<h2 className="header text-center py-3 connexion" style={{fontFamily: 'initial'}}>Connexion</h2>
					                <div className="row m-2">
								        <input type="text" name="username" value={username} onChange={this.changeHandler} placeholder="Entrez votre Username"className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row m-2 pt-3">
								        <input type="password" name="password" value={password} onChange={this.changeHandler} placeholder="Entrez votre mot de passe" className="rounded " style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    </div>
								    <div className="row">
								        <div className="py-3">
								        	<button type="submit" className="btn col-lg-4  rounded connexion text-light" style={{backgroundColor: '#01D758'}}>Se connecter</button>
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

  
