import React from "react";
import "../../Assets/Paciente/Login.css";
import {Link} from 'react-router-dom'
import { useState } from "react";


export default class Inputdni extends React.Component {
  state = {
    values: {
      colegiado: '',

    }
  }

  handleChange = e => {
    this.setState({
      values: {
        ...this.state.values,
        [e.target.name]: e.target.value
      }
    })
  }

  handleBlur = e => {
    if(e.target.name === 'colegiado') {
      //alert(`Guardando DNI: ${this.state.values.DNI}`)
    }
  }



  render() {
    const backUrl='http://localhost:3000/medico/'

    return (
      <div>
        <form>
          <input 

          id='input'
          className="form-control"
          type="text"
          name="colegiado"
          placeholder="Introduzca su Nº de colegiado"
          pattern="[0-9]{9}"
          title="Debe poner 9 números"
          value={this.state.values.colegiado}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        >
        </input>
        <input
          name="pass"
          className="form-control mt-2"
          placeholder="Introduzca su contraseña"
          type="password"
          value={this.state.values.pass}
          onChange={this.handleChange}
          
          />   
          <Link 
          className="btn btn-success mt-2"
          to={{pathname:`/medico/${this.state.values.colegiado}`, query: {backUrl}}}
          >        
          Ver mis citas
        </Link>
   
          
        </form>
      </div>
    );
  }
}
