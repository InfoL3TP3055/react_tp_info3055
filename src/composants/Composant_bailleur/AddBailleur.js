import React, { Component } from "react";
import bailleurService from "../../services/bailleur.service";

export default class AddBailleur extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeProffession = this.onChangeProffession.bind(this);
    this.onChangeNum_tel = this.onChangeNum_tel.bind(this);
    this.onChangeNum_cni = this.onChangeNum_cni .bind(this);
    
    this.saveBailleur = this.saveBailleur.bind(this);
    this.newBailleur = this.newBailleur.bind(this);

    this.state = {
      id: null,
      username: "",
      email: "", 
      password:"",
      proffession:"",
      num_tel:"",
      num_cni:"",
      published: false,

      submitted: false
    };
  }

  onChangeUsername(e) {
    this.setState({
        username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
        email: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
        password: e.target.value
    });
  }
  onChangeProffession(e) {
    this.setState({
        proffession: e.target.value
    });
  }
  onChangeNum_tel(e) {
    this.setState({
        num_tel: e.target.value
    });
  }
  onChangeNum_cni(e) {
    this.setState({
        num_cni: e.target.value
    });
  }

  saveBailleur() {
    var data = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        proffession: this.state.proffession,
        num_tel: this.state.num_tel,
        num_cni: this.state.num_cni
    };

    bailleurService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
          proffession: response.data.proffession,
          num_tel: response.data.num_tel,
          num_cni: response.data.num_cni,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newBailleur() {
    this.setState({
        id: null,
        username: "",
        email: "", 
        password:"",
        proffession:"",
        num_tel:"",
        num_cni:"",

      submitted: false
    });
  }

  render() {
    // ...
  }
}