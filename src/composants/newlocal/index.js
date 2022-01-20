import React from "react";
import axios from 'axios';
import Fond from "../../images/background.jpg";



export class NewLocal extends React.Component {

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
		const {id_propriete, id_local, nom_local,prix,nombre_pieces,img1,img2,img3,img4,img5,img6} = this.state
		return (
			<div>
			<div style={{backgroundImage: 'url('+Fond+')',backgroundSize: "cover"}} >
		    		<div className="py-5"></div>		          	
		    		<div className="py-2"></div>		          	

		    	<div className="container-fluid d-flex justify-content-center">
				            

			            <div className="border rounded  col-lg-7 " style={{boxShadow: "0px 0px 9px darkgray"}}>
					            <form onSubmit={this.submitHandler} method='POST' >
					            	<h2 className="header text-center text-success py-3 " style={{fontFamily: 'initial'}}>Nouveau local</h2> 	
					                
								        <input type="number" name="id_propriete" value={id_propriete} onChange={this.changeHandler} placeholder="Entrez l'Id de la propriété auquel il appartient"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
								        <input type="number" name="id_local" value={id_local} onChange={this.changeHandler} placeholder="Entrez l'Id du local"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								        <input type="text" name="nom_local" value={nom_local} onChange={this.changeHandler} placeholder="Entrez le nom du local  "className="rounded col-lg-12  my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								   
					                
								        <input type="number" name="prix" value={prix} onChange={this.changeHandler} placeholder="Entrez le prix" className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
												   

								        <input type="number" name="nombre_pieces" value={nombre_pieces} onChange={this.changeHandler} placeholder="Combien de pieces compte ce local?"className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
						                <p className="text-left col-lg-12 my-1">images du local:</p> 
								        <input type="file"  value={img1} onChange={this.changeHandler} className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								        <input type="file"  value={img2} onChange={this.changeHandler} className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								        <input type="file"  value={img3} onChange={this.changeHandler} className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								        <input type="file"  value={img4} onChange={this.changeHandler} className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								        <input type="file"  value={img5} onChange={this.changeHandler} className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								        <input type="file"  value={img6} onChange={this.changeHandler} className="rounded col-lg-12 my-1" style={{backgroundColor: '#f3f3f3', height: '37px'}}></input>
								    
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

  
