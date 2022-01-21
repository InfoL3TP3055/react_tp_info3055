import React from 'react';
                        
export class Proprietes extends React.Component {
      // Constructor 
      constructor(props) {
        super(props);
   
        this.state = {
          proprietes: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
          "http://127.0.0.1:8080/api/tp/propriete/liste")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    proprietes: json,
                    DataisLoaded: true
                });
            })
          }
    render(){
        const { DataisLoaded, proprietes } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
        return (

            <div>
             <div className='py-5'></div>

            <div className="container-fluid ">
            <h1 className="connexion pt-4 d-flex justify-content-center" style={{ color: '#01D758' ,fontFamily: 'monospace'}}>Toutes mes Propriétés</h1>

            <div className="d-flex justify-content-center py-4 ">
                <div class="table-responsive-lg">
                    <table class="table table-hover">
                        <thead class="thead bg-dark">
                            <tr>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>ID</th>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Nom</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Ville</th>
                                <th scope="col" style={{ color: 'gray' ,fontFamily: 'inherit'}}>Quartier</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Secteur</th>
                               
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                        {
                proprietes.map((propriete) => ( 
                <tr key = { propriete.id } >
                                <td class="text-center py-3"> <p>{ propriete.propid }</p>  </td>
                                <td class="text-center py-3 " ><p>{ propriete.propnom }</p>  </td>
                                <td class="text-center py-3">{ propriete.propville }</td> 
                                <td class="text-center py-3">{ propriete.propquartier }</td> 
                                <td class="text-center py-3">{ propriete.propsecteur }</td> 
                               
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
                        <a href='/newprop'> <button type="submit" className="btn  rounded connexion text-light " style={{backgroundColor: '#4CAF50'}}>Ajouter</button></a>
                    </div>
                </div>
            </div>  
            

             </div>

            </div>
            
           
        ); 
    }     
};
export default Proprietes;