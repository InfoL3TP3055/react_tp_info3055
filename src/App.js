import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*import "bootstrap/dist/css/bootstrap.min.css";

import BailleurList from './composants/Composant_bailleur/BailleurList';
import Bailleur from './composants/Composant_bailleur/Bailleur';
import AddBailleur from './composants/Composant_bailleur/AddBailleur';
*/
import Footer from "./composants/footer";
import Navigation from "./composants/navbar";
import Locataire from "./pages/locataire";
import Location from "./pages/location";
//import Dashboard from './composants/dashboard/dashboard';

import {Connexion} from "./pages/connexion";
import {Inscription} from "./pages/inscripBailleur";
/*
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/bailleurs" className="navbar-brand">
            bailleur
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/bailleur/liste"} className="nav-link">
                Liste
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/bailleur/nouveau"} className="nav-link">
                Ajouter 
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/bailleur/liste"]} component={BailleurList} />
            <Route exact path="/bailleur/nouveau" component={AddBailleur} />
            <Route path="/bailleur/:id" component={Bailleur} />
          </Switch>
        </div>
      </div>
    );
  }
}
*/

const App = () => (
  <div className="App">
    <Router>
    <div>
    <Navigation/>
      
      <Switch>
      	<Route path='/locataire'component={Locataire} />
      	<Route path='/location'component={Location} />
        
      	<Route path='/connexion'component={Connexion} />
      	<Route path='/inscription'component={Inscription} />



      </Switch>
     
      <Footer/>
      </div>
    </Router>
  </div>
);


export default App;
                   

                       
