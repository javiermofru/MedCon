import React, { Component } from "react";
import "../Assets/Login.css";
import { Card} from "react-bootstrap";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }
    
    render() {
        return (
            
            <div className="pacienteLogin">
                <div className="inicioPacienteLogin">
                    <Card className="text-center">
                        <Card.Header>Se ha registrado como paciente</Card.Header>
                        <Card.Body>
                            <Card.Title>Bienvenido al centro de salud</Card.Title>
                            <Card.Text>
                            Para visualizar sus citas, introduzca su DNI
                            </Card.Text>

                            <form>
                                <div className="form-group">
                                    <input 
                                        type="dni" 
                                        className="form-control" 
                                        id="inputDNI" 
                                        placeholder="Introduzca su DNI">
                                    
                                    </input>
                                </div>
                                //En este href, hay que poner el dni introducido en el input de la línea anterior
                                <a type="submit" className="btn btn-success mt-2" href="79120176S" role="button">Mostrar citas</a>
                                
                            </form>


                        
                        </Card.Body>
                    </Card> 
    
                </div>
            </div>
        );
    }
    
}