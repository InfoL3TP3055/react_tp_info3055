import React from 'react';
                        
export class Locaux extends React.Component {
    render(){
        return (

            <div>
             <div className='py-5'></div>

            <div className="container-fluid ">
            <h1 className="connexion pt-4 d-flex justify-content-center" style={{ color: '#01D758' ,fontFamily: 'monospace'}}>Tous mes locaux</h1>

            <div className="d-flex justify-content-center py-4 ">
                <div class="table-responsive-lg">
                    <table class="table table-hover">
                        <thead class="thead bg-dark">
                            <tr>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>ID local</th>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Id Propriété</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Nom du local</th>
                           
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Nombre de pièces</th>
                                <th scope="col" style={{ color: 'gray' ,fontFamily: 'inherit'}}>prix</th>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center py-3"> <p>Chargement...</p>  </td>
                                <td class="text-center py-3 " ><p>Chargement...</p>  </td>
                                <td class="text-center py-3">Chargement...</td> 
                                <td class="text-center py-3">Chargement...</td> 
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
                        <a href='/newlocal'> <button type="submit" className="btn  rounded connexion text-light " style={{backgroundColor: '#4CAF50'}}>Ajouter</button></a>
                    </div>
                </div>
            </div>  
            

             </div>

            </div>
            
           
        ); 
    }     
};
export default Locaux;