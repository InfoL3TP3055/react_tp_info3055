import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./composants/footer";
import Navigation from "./composants/navbar";
import Locataire from "./pages/locataire";
import {Connexion} from "./pages/connexion";




const App = () => (
  <div className="App">
    <Router>
    <div>
    <Navigation/>
      
      <Switch>
      	<Route path='/locataire'component={Locataire} />
      	<Route path='/connexion'component={Connexion} />



      </Switch>
     
      <Footer/>
      </div>
    </Router>
  </div>
);
  

export default App;
                   

                       
