import React, { Component } from "react";
import BailleurDataService from "../services/bailleur.service";

export default class Bailleur extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeProffession = this.onChangeProffession.bind(this);
    this.onChangeNum_tel = this.onChangeNum_tel.bind(this);
    this.onChangeNum_cni = this.onChangeNum_cni .bind(this);
    this.updateBailleur = this.updateBailleur.bind(this);
    this.deleteBailleur = this.deleteBailleur.bind(this);

    this.state = {
      currentBailleur: {
        id: null,
        username: "",
        email: "", 
        password:"",
        proffession:"",
        num_tel:"",
        num_cni:""
     
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getBailleur(this.props.match.params.id);
  }

  onChangeUsername(e) {
    const username = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBailleur: {
          ...prevState.currentBailleur,
          username: username
        }
      };
    });
  }

  onChangePassword(e) {
    const email = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBailleur: {
          ...prevState.currentBailleur,
          email: email
        }
      };
    });
  }
  onChangeEmail(e) {
    const password = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBailleur: {
          ...prevState.currentBailleur,
          password: password
        }
      };
    });
  }
  onChangeProffession(e) {
    const proffession = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBailleur: {
          ...prevState.currentBailleur,
          proffession: proffession
        }
      };
    });
  }
  onChangeNum_tel(e) {
    const num_tel = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBailleur: {
          ...prevState.currentBailleur,
          num_tel: num_tel
        }
      };
    });
  }
  onChangeNum_cni(e) {
    const num_cni = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBailleur: {
          ...prevState.currentBailleur,
          num_cni: num_cni
        }
      };
    });
  }

  getBailleur(id) {
    BailleurDataService.get(id)
      .then(response => {
        this.setState({
            currentBailleur: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentBailleur.id,
      username: this.state.currentBailleur.username,
      email: this.state.currentBailleur.email, 
      password:this.state.currentBailleur.password,
      proffession:this.state.currentBailleur.proffession,
      num_tel:this.state.currentBailleur.num_tel,
      num_cni:this.state.currentBailleur.num_cni,
    };

    BailleurDataService.update(this.state.currentBailleur.id, data)
      .then(response => {
        this.setState(prevState => ({
            currentBailleur: {
            ...prevState.currentBailleur
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateBailleur() {
    BailleurDataService.update(
      this.state.currentBailleur.id,
      this.state.currentBailleur
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The bailleur was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {    
    BailleurDataService.delete(this.state.currentBailleur.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/bailleurs')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentBailleur } = this.state;

    return (
      <div>
        {currentBailleur ? (
          <div className="edit-form">
            <h4>Bailleur</h4>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={currentBailleur.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentBailleur.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  value={currentBailleur.password}
                  onChange={this.onChangePassword}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentBailleur.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentBailleur.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentBailleur.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              
            </form>

           

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteBailleur}
            >
              Suppprimer
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateBailleur}
            >
              Modifier
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Bailleur...</p>
          </div>
        )}
      </div>
    );
  }
}
