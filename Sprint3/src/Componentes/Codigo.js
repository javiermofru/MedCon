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
    <div className="codigo">
      <div className='codigoInicio'>
    
        <Card className='text-center' >
        
        <Card.Body >
            <Card.Title>BIENVENIDO, "NOMBRE-PACIENTE"</Card.Title>
            <Card.Text >
            SU CÓDIGO PARA SER ATENDIDO ES:
            </Card.Text>
           {getAleatorio()}
            <Card.Text >
            ESPERE SU TURNO EN: 
            </Card.Text>
            <Card.Title >
            SALA DE ESPERA 8
            </Card.Title>




            <Button >IMPRIMIR</Button>
            <Button href='home' id='btn'>VOLVER</Button>

        </Card.Body>
        
  </Card>
      
    </div>
    </div>
  );
}

export default Codigo;
