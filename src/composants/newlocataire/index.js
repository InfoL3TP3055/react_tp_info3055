import React from "react";
//import axios from 'axios';
import Fond from "../../images/background.jpg";
//import styled from "@emotion/styled";




export class NewLocataire extends React.Component {
/*	state = {
		locatnom: '',
		locatcni: '',
		locattel: '',
		locatproff: '',
		
	  }
	
	  handleChange = event => {
		this.setState({ locatnom: event.target.value });
		this.setState({ locatcni: event.target.value });
		this.setState({ locattel: event.target.value });
		this.setState({ locatproff: event.target.value });
	  }
	 
	
	  handleSubmit = event => {
		event.preventDefault();
	
		const locataire = {
		locatnom: this.state.locatnom,
		locatcni: this.state.locatcni,
		locattel: this.state.locattel,
		locatproff: this.state.locatproff
		};
	
		axios.post(`http://127.0.0.1:8080/api/tp/locataire/nouveau`, { locataire })
		  .then(res => {
			console.log(res);
			console.log(res.data);
			window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
		  })
	  }
*/
constructor() {
    super();
    this.state = { locataire: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var self = this;
    //On submit of the form, send a POST request with the data to the server.
    fetch('http://127.0.0.1:8080/api/tp/locataire/nouveau', { 
        method: 'POST',
        data: {
			locatnom: self.refs.locatnom,
			locatcni: self.refs.locatcni,
			locattel: self.refs.locattel,
			locatproff: self.refs.locatproff
			
        }
      })
      .then(function(response) {
        return response.json()
      }).then(function(body) {
        console.log(body);
      });
  }
	render() {
		//const {username, password,nom, prenom,num_cni,profession,email,num_tel,ville,local} = this.state
		return (
			<div>
			<div style={{backgroundImage: 'url('+Fond+')',backgroundSize: "cover"}} >
		    		<div className="py-5"></div>		          	
		    		<div className="py-2"></div>		          	

		    	<div className="container-fluid d-flex justify-content-center">
				            

			            <div className="border rounded  col-lg-7 " style={{boxShadow: "0px 0px 9px darkgray"}}>
					            <form onSubmit={this.handleSubmit}  method='POST' >
					            	<h2 className="header text-center text-success py-3 " style={{fontFamily: 'initial'}}>Nouveau locataire</h2> 	
					                
								        <input type="text" refs="locatnom" onChange={this.handleChange}  placeholder="Entrez le nom du locataire "className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
							   
								        <input type="text" refs="locattel" onChange={this.handleChange}  placeholder="Entrez le numéro de téléphone du locataire"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="text" refs="locatcni" onChange={this.handleChange}  placeholder="Entrez le numéro de cni du locataire"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    
								        <input type="text" refs="locatproff" onChange={this.handleChange}   placeholder="Entrez la profession du locataire" className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    
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

  
