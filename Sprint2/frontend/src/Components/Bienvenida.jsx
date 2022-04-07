import React, { Component , useEffect} from 'react';
import { useState } from "react";
import {NavLink} from "react-router-dom"



class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {citas: []};
  }

  componentDidMount() {
      fetch('/bienvenida/')
          .then(response => response.json())
          .then(data => this.setState({citas: data}));
  }

  generateCode(){

  }


  render(){

    const {citas} = this.state;

        const citas_lista = citas.map(cita => {
            return <tr key={cita.id}>
                <td>{cita.medico}</td>
                <td>{cita.fecha}</td>
                <td>{cita.hora}</td>
                <td>{cita.status}</td>
                <td>
                  {/* <ButtonGroup>
                      <Button size="sm" color="danger" onClick={() => this.generateCode()}>Asistir</Button>
                  </ButtonGroup> */}
                </td>
            </tr>
        });

    return(
      <div>
            <h2 style={boxStyle}>Hola</h2>
            <div>
                {citas_lista}
            </div>
            <NavLink to='/' 
            //onClick={()=> setVolver(!volver)} className="btn btn-success"
            >
                <span>Volver</span>
            </NavLink>
      </div>
    )
  }
}

export default Welcome;

const boxStyle = {
  width: "500px",
  height: "200px",
  background:"rgb(245,245,245)",
  textAlign:"center",
  color:"#262626",
  top: 0,
  left: 0,
  lineHeight:"190px",
  borderRadius:"10px"
}