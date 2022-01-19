import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./composants/footer";
import Navigation from "./composants/navbar";
import Locataire from "./pages/locataire";
import Location from "./pages/location";

import {Connexion} from "./pages/connexion";
import {Inscription} from "./pages/inscripBailleur";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}
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
                   

                       
