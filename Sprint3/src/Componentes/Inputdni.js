import React from "react";
import "../Assets/Login.css";
import {Link} from 'react-router-dom'
import { CheckCircle, ArrowRight} from 'react-bootstrap-icons'

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
          pattern="[0-9]{8}[A-Z]{1}" 
          title="Debe poner 8 números y una letra mayúscula"
          type="text" ref="textInput" />
          
          <button
          className="btn btn-success m-2"
          >
          <CheckCircle />
          
          
          
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

