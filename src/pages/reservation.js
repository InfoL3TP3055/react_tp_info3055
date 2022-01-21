import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Fond from "../images/fond.png";
import Navigation from "../composants/navbar";




export class Reservation extends React.Component {
	render() {
		
		return (
			<div>
			<Navigation/>
			<div style={{backgroundImage: 'url('+Fond+')', backgroundSize:'cover'}} >

		    	<div className="container-fluid ">
		    		<div className="py-5"></div>
		    			<h2 className="header text-center text-success py-3 " style={{fontFamily: 'initial'}}>Reservation</h2>
		    			<p className="header text-center text-muted fst-italic pt-3 " style={{fontFamily: 'initial'}}>Reserver un local signifie au bailleur que vous etes intéressez par le local et que vous désirez l'occuper. En cas de reservation consultez votre boite email et suivez les étapes.</p>

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
								        	<button type="submit" className="btn col-lg-4  rounded  text-light" style={{backgroundColor: '#01D758'}}>Reservez</button>
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

  

