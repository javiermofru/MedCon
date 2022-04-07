import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/codigo.css';
import { Card, Button } from 'react-bootstrap';
import {Route, Routes} from 'react-router-dom'
function Codigo() {
    const getAleatorio = () => {
    var aleatorio = Math.floor(1000*Math.random());
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codigo = []
    for (let i=0; i<3; i++){
        codigo[i]=characters.charAt(Math.floor(Math.random()*25));
        
    }
    codigo.push(aleatorio);
    return( 
        <Card.Title id='code'>
        {codigo}
        </Card.Title>
    )
}
  return (
    <div className="Codigo">
        <Card id='caja' className="border-top-0 ">
        
        <Card.Body className='card card-block w-40 mx-auto '>
            <Card.Title id='welcome'>BIENVENIDO, "NOMBRE-PACIENTE"</Card.Title>
            <Card.Text id='info'>
            SU CÓDIGO PARA SER ATENDIDO ES:
            </Card.Text>
           {getAleatorio()}
            <Card.Text id='info'>
            ESPERE SU TURNO EN: 
            </Card.Text>
            <Card.Title id='sala'>
            SALA DE ESPERA 8
            </Card.Title>




            <Button id='btn' >IMPRIMIR</Button>
            <Button href='home' id='btn'>VOLVER</Button>

        </Card.Body>
        
  </Card>
      
    </div>
  );
}

export default Codigo;
