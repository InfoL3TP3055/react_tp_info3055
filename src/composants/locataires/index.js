import React from 'react';

                        
export class ListLocataire extends React.Component {
  
    // Constructor 
    constructor(props) {
      super(props);
 
      this.state = {
        locataires: [],
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
      fetch(
        "http://127.0.0.1:8080/api/tp/locataire/liste")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  locataires: json,
                  DataisLoaded: true
              });
          })
        }
    
    render(){
      const { DataisLoaded, locataires } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
   return (

            <div>
               <div className = "App">
            <h1> Fetch data from an api in react </h1> 
        </div>
             <div className='py-5'></div>
          
            <div className="container-fluid ">
            <h1 className="connexion pt-4 d-flex justify-content-center" style={{ color: '#01D758' ,fontFamily: 'monospace'}}> Liste des locataires</h1>

            <div className="d-flex justify-content-center py-4 ">
                <div class="table-responsive-lg">
                    <table class="table table-hover">
                        <thead class="thead bg-dark">
                            <tr>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>ID</th>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Nom</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Téléphone</th>
                                <th scope="col" style={{ color: 'gray' ,fontFamily: 'inherit'}}>Email</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Local</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Profession</th>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Actions</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                           
                            {
                locataires.map((locataire) => ( 
                <tr key = { locataire.id } >
                                <td className="text-center py-3"> <p>{ locataire.locatid }</p>  </td>
                                <td class="text-center py-3 " ><p>{ locataire.locatnom }</p>  </td>
                                <td class="text-center py-3">{ locataire.locattel }</td> 
                                <td class="text-center py-3">{ locataire.email }</td> 
                                <td class="text-center py-3">{ locataire.locatproff }</td> 
                                <td class="text-center py-3">Chargement... </td> 
                                <td class="text-center">
                                        <div className="">
                                           <button  type="submit" className="btn  rounded connexion text-light" style={{backgroundColor: 'red'}}>supprimer</button>
                                        </div>
                                </td> 

                            </tr> 
                   
                ))
            }
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <a href='/newlocataire'> <button type="submit" className="btn  rounded connexion text-light " style={{backgroundColor: '#4CAF50'}}>Ajouter</button></a>
                    </div>
                </div>
            </div>  
            

             </div>

            </div>  
        ); 
        
        
    }     
};
export default ListLocataire;