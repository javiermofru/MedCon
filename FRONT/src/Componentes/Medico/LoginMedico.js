import React from "react";
import { Card} from "react-bootstrap";
import InputColegiado from "./InputColegiado";


import "../../Assets/Paciente/Login.css";;

export default class LoginMedico extends React.Component {    
    render() {
        
        return (
            
            <div className="pacienteLogin">
                <div className="inicioPacienteLogin">
                    <Card className="text-center">
                        <Card.Header>App médico </Card.Header>
                        <Card.Body>
                            <Card.Title className="display-3" >
                            Bienvenido al portal Web MEDCON
                            </Card.Title>
                            <Card.Text className='h4' >
                            Para iniciar sesión, introduzca su nº de colegiado y su contraseña
                            </Card.Text>
                            <InputColegiado/>    
                            <a href="/medico">Logout</a>             
                        </Card.Body>
                    </Card> 
    
                </div>
            </div>
        );
    }
    
}