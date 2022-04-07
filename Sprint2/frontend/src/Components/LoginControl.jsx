import React from "react";
import Welcome from "./Bienvenida";
import Signup from "./Signup";
import Card from "react-bootstrap/Card";
import Button from "react";
import '../Estilo/Login.css'
import logo from '../Assets/logo.jpg'
import {NavLink} from "react-router-dom"

class LoginControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {consultas: []};
  }

  componentDidMount() {
      fetch('/')
          .then(response => response.json())
          .then(data => this.setState({consultas: data}));
  }

  

  /* Control = () => {
    let username = document.getElementById("username").value;
    /* if(username != null){
      consulta.map (cita => {
        if (cita.dni === username){
          this.setState({ isSign: true });
        } 
      });
    }
  }; */

  render() {
     

    return (    
        <div>
            <div className="login">
            <div className="cuadro">  
            <img src={logo} alt='logo' width="180px"></img>  
            <p>Bienvenidos</p>
            <p>Para seleccionar su cita introduzca el DNI</p>
            <div className="main_box--main--login">
                <div><input
                type="text"
                id="username"
                className="form-control"
                placeholder="Introduzca su DNI"
                autoComplete="false"
                />
                </div>
                <div className="consulta">
                
                <NavLink to={'/bienvenida/' /* + cita.dni */} style={consulta}>
                  <span className="consulta">Consultar citas</span>
                </NavLink>
                </div>
                
            </div>
            </div>
            </div>  
        </div>
    );
  }
}

export default LoginControl;

const consulta = {
  background:"grey",
  textAlign:"center",
  color:"black",
  borderRadius:"10px",
  padding: "10px",
  textDecoration: "none"
} 
