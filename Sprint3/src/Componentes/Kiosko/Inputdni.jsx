import React from "react";
import "../../Assets/Paciente/Login.css";
import {Link} from 'react-router-dom'

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
          className="btn btn-success btn-lg m-2">
          OK         
          </button>
          <Link 
          className="btn btn-success btn-lg m-2"
          to={this.state.value}>
          
          MOSTRAR CITAS
          </Link>
        </form>
      </div>
    );
  }
}
