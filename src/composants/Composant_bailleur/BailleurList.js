import React, { Component } from "react";
import BailleurDataService from "../../services/bailleur.service";
import { Link } from "react-router-dom";

export default class BailleurList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchBailleur = this.onChangeSearchBailleur.bind(this);
    this.retrieveBailleurs = this.retrieveBailleurs.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBailleur  = this.setActiveBailleur .bind(this);
    this.removeAllBailleurs = this.removeAllBailleurs.bind(this);
    this.searchUsername = this.searchUsername.bind(this);

    this.state = {
      Bailleurs: [],
      currentBailleur: null,
      currentIndex: -1,
      searchUsername: ""
    };
  }

  componentDidMount() {
    this.retrieveBailleurs();
  }

  onChangesearchUsername(e) {
    const searchUsername = e.target.value;

    this.setState({
        searchUsername: searchUsername
    });
  }

  retrieveBailleurs() {
  BailleurDataService.getAllBailleurs()
      .then(response => {
        this.setState({
            bailleurs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveBailleurs();
    this.setState({
      currentBailleur: null,
      currentIndex: -1
    });
  }

  setActiveBailleur(bailleur, index) {
    this.setState({
      currentBailleur: bailleur,
      currentIndex: index
    });
  }
/*
  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
*/
  searchBailleur() {
    BailleurDataService.findByUsername(this.state.searchUsername)
      .then(response => {
        this.setState({
          bailleurs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchUsername, bailleurs, currentBailleur, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by username"
              value={searchUsername}
              onChange={this.onChangeSearchBailleur}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchUsername}
              >
                Rechercher un Bailleur
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Bailleurs Liste</h4>

          <ul className="list-group">
            {bailleurs &&
              bailleurs.map((bailleur, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUsername(bailleur, index)}
                  key={index}
                >
                  {bailleur.username}
                </li>
              ))}
          </ul>

   
        </div>
        <div className="col-md-6">
          {currentBailleur ? (
            <div>
              <h4>Bailleur</h4>
              <div>
                <label>
                  <strong>Username:</strong>
                </label>{" "}
                {currentBailleur.username}
              </div>
             
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentBailleur.email}
              </div>
              <div>
                <label>
                  <strong>password:</strong>
                </label>{" "}
                {currentBailleur.password}
              </div>
              <div>
                <label>
                  <strong>proffession:</strong>
                </label>{" "}
                {currentBailleur.proffession}
              </div>
              <div>
                <label>
                  <strong>num_tel:</strong>
                </label>{" "}
                {currentBailleur.num_tel}
              </div>
              <div>
                <label>
                  <strong>num_cni:</strong>
                </label>{" "}
                {currentBailleur.num_cni}
              </div>

              <Link
                to={"/tutorials/" + currentBailleur.id}
                className="badge badge-warning"
              >
                Modifier
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Bailleur...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}