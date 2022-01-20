import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./composants/footer";

import Locataire from "./pages/locataire";
import Location from "./pages/location";
import Bailleur from "./pages/bailleur";
import Locataires from "./pages/listlocataire";
import NouveauLocataire from "./pages/newlocataire";
import ListProp from "./pages/propriete";
import NouvelleP from "./pages/newproprite";
import AllLocaux from "./pages/locaux";
import NouveauLoc from "./pages/newlocal";
import AllContrat from "./pages/contrat";
import NouveauContrat from "./pages/newcontrat";
import Factures from "./pages/facture";


import {Connexion} from "./pages/connexion";
import {Inscription} from "./pages/inscripBailleur";


const App = () => (
  <div className="App">
    <Router>
    <div>      
      <Switch>
      	<Route path='/locataire'component={Locataire} />
      	<Route path='/location'component={Location} />
        <Route path='/bailleur'component={Bailleur} />
        <Route path='/listlocataire'component={Locataires} />
        <Route path='/newlocataire'component={NouveauLocataire} />
        <Route path='/propriete'component={ListProp} />
        <Route path='/newprop'component={NouvelleP} />
        <Route path='/locaux'component={AllLocaux} />
        <Route path='/newlocal'component={NouveauLoc} />
        <Route path='/contrat'component={AllContrat} />

        <Route path='/newcontrat'component={NouveauContrat} />
        <Route path='/facture'component={Factures} />


      	<Route path='/connexion'component={Connexion} />
      	<Route path='/inscription'component={Inscription} />



      </Switch>
     
      <Footer/>
      </div>
    </Router>
  </div>
);
  

export default App;
                   

                       
