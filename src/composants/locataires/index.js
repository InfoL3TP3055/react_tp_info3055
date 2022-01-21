import React from 'react';
                        
export class ListLocataire extends React.Component {
    render(){
        return (

            <div>
             <div className='py-5'></div>

            <div className="container-fluid ">
            <form role="search" >
                <div class="input-group border col-lg-5 ms-auto bg-light" >
                    <input type="text" class="form-control bg-transparent border-0 " placeholder="  Rechercher un locataire"/>
                        <div class="input-group-btn ms-auto ">
                            <button type="submit" class="btn btn-default ">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                </div>
            </form> 
            <h1 className="connexion pt-4 d-flex justify-content-center" style={{ color: '#01D758' ,fontFamily: 'monospace'}}> Liste des locataires</h1>

            <div className="d-flex justify-content-center py-4 ">
                <div class="table-responsive-lg">
                    <table class="table table-hover">
                        <thead class="thead bg-dark">
                            <tr>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Nom</th>
                                <th scope="col"   style={{ color: 'gray' ,fontFamily: 'inherit'}}>Prénom</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Téléphone</th>
                                <th scope="col" style={{ color: 'gray' ,fontFamily: 'inherit'}}>Email</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Local</th>
                                <th scope="col"  style={{ color: 'gray' ,fontFamily: 'inherit'}}>Profession</th>
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
                                <td class="text-center py-3">Chargement... </td> 
                                <td class="text-center">
                                        <div className="">
                                           <button  type="submit" className="btn  rounded connexion text-light" style={{backgroundColor: 'red'}}>supprimer</button>
                                        </div>
                                        <div className="pt-1">
                                           <button  type="submit" className="btn  rounded connexion text-light" style={{backgroundColor: 'green'}}>modifier</button>
                                        </div>
                                </td> 

                            </tr>
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