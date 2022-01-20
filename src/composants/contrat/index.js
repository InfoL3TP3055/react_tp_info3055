import React from 'react';
                        
export class Contrat extends React.Component {
    render(){
        return (

            <div>
             <div className='py-5'></div>

            <div className="container-fluid ">
            <h1 className="connexion pt-4 d-flex justify-content-center" style={{ color: '#01D758' ,fontFamily: 'monospace'}}>Tous mes Contrats</h1>

            <div className="d-flex justify-content-center py-4 ">
                <div class="table-responsive-lg">
                    <table class="table table-hover">
                        <thead class="thead bg-dark">
                            <tr>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>ID local</th>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Id Contrat</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Titre</th>
                           
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Description</th>
                                <th scope="col" style={{ color: 'gray' ,fontFamily: 'inherit'}}>Date d'entrée</th>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Date de sortie</th>

                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Prix mensuel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center py-3"> <p>Chargement...</p>  </td>
                                <td class="text-center py-3 " ><p>Chargement...</p>  </td>
                                <td class="text-center py-3">Chargement...</td> 
                                <td class="text-center py-3">Chargement...</td> 
                                <td class="text-center py-3">Chargement... </td> 
                                <td class="text-center py-3">Chargement... </td> 

                                <td class="text-center">
                                        <div className="">
                                           <button  type="submit" className="btn  rounded connexion text-light" style={{backgroundColor: 'red'}}>supprimer</button>
                                        </div>
                                </td> 

                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <a href='/newcontrat'> <button type="submit" className="btn  rounded connexion text-light " style={{backgroundColor: '#4CAF50'}}>Nouveau contrat</button></a>
                    </div>
                </div>
            </div>  
            

             </div>

            </div>
            
           
        ); 
    }     
};
export default Contrat;