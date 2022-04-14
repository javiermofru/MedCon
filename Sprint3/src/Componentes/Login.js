import React, { Component, useRef } from "react";
import "../Assets/Login.css";
import { Card} from "react-bootstrap";
import { ReactDOM } from "react";
import Inputdni from "./Inputdni";

export default class Login extends React.Component {    
    render() {
        
        return (
            
            <div className="pacienteLogin">
                <div className="inicioPacienteLogin">
                    <Card className="text-center">
                        <Card.Header>Se ha registrado como paciente </Card.Header>
                        <Card.Body>
                            <Card.Title >
                            Bienvenido al centro de salud
                            </Card.Title>
                            <Card.Text >
                            Para visualizar sus citas, introduzca su DNI
                            </Card.Text>
                            <Inputdni/>






                        
                        </Card.Body>
                    </Card> 
    
                </div>
            </div>
        );
    }
    
}