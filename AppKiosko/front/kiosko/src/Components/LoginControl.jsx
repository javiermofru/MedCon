import React from "react";
import Welcome from "./Bienvenida";
import Signup from "./Signup";
import Card from "react-bootstrap/Card";
import Button from "react";
import '../Estilo/Login.css'
import logo from '../Assets/logo.jpg'

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: "01234567Q", name:"Javier"},
        { username: "true"},
        { username: "furkan"}
      ],
      welcomeConnect: false,
      trueUsername: "",
      isSign: false,
      isSignUp: false
    };
    this.new = this.props;
  }

  Control = () => {
    var username = document.getElementById("username");
    this.state.users.map(user => {
      if (
        user.username === username.value
      ) {
        return this.setState({
          welcomeConnect: true,
          trueUsername: user.username,
          name: user.name
        });
      }
    });
  };

  SignUp = () => {
    this.setState({ isSign: true });
  };

  render() {
    return (    
        <div>
            <div className="login">
                    {this.state.welcomeConnect ? (
            <Welcome uName={this.state.name}/>
            ) : this.state.isSign ? (
            <Signup dataState={this.state} isClick={this.state.welcomeConnect} />
            ) : (
            <div className="cuadro">  
            <img src={logo} alt='logo' width="180px"></img>  
            <p>Bienvenidos</p>
            <p>Para solicitar el ticket de la sala de consulta introduzca su DNI</p>
            <div className="main_box--main--login">
                <div><input
                type="text"
                id="username"
                className="form-control"
                placeholder="Introduzca su DNI"
                autoComplete="false"
                />
                </div>
                <button className="btn btn-success" onClick={this.Control}>
                Consultar Citas
                </button>
            </div>
            </div>
            )}
            </div>  
        </div>
    );
  }
}

export default LoginControl;
