import React from "react";
import "../Assets/Login.css";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class Inputdni extends React.Component {
    state = {
    value: ''
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.refs.textInput.value})
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          className="form-control"
          placeholder="Introduzca su dni"
          pattern="[0-9]{8}[A-Za-z]{1}" 
          title="Debe poner 8 números y una letra"
          type="text" ref="textInput" />
          
          <button
          className="btn btn-success m-2"
          >
          
          OK
          
          </button>
          <Link 
          className="btn btn-success m-2"
          to={this.state.value}>
          
          Mostar citas
          </Link>
        </form>
      </div>
    );
  }
}

