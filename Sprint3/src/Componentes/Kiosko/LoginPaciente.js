import React from "react";
import { Card} from "react-bootstrap";
import Inputdni from "./Inputdni";

import "../../Assets/Paciente/Login.css";;

export default class Login extends React.Component {    
    render() {
        
        return (
            
            <div className="pacienteLogin">
                <div className="inicioPacienteLogin">
                    <Card className="text-center">
                        <Card.Header>Se ha registrado como paciente </Card.Header>
                        <Card.Body>
                            <Card.Title className="display-3" >
                            Bienvenido al centro de salud
                            </Card.Title>
                            <Card.Text className='h4' >
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