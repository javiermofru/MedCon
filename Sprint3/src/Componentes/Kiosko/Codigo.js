import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/codigo.css';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

function Codigo() {
    let navigate = useNavigate();
    const getAleatorio = () => {
    var aleatorio = Math.floor(1000*Math.random());
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let codigo = []
    for (let i=0; i<3; i++){
        codigo[i]=characters.charAt(Math.floor(Math.random()*25));
        
    }
    codigo.push(aleatorio);
    return( 
        <Card.Title className='h1 display-2' id='code'>
        {codigo}
        </Card.Title>
    )
    
}
  return (
    <div className="codigo">
      <div className='codigoInicio'>
    
        <Card className='text-center' >
        
        <Card.Body >
            <Card.Title className='display-4'>BIENVENIDO, "NOMBRE-PACIENTE"</Card.Title>
            <Card.Text >
            SU CÓDIGO PARA SER ATENDIDO ES:
            </Card.Text>
           {getAleatorio()}
            <Card.Text >
            ESPERE SU TURNO EN: 
            </Card.Text>
            <Card.Title className='display-2' >
            SALA DE ESPERA 8
            </Card.Title>



            <div className='btn-group-vertical'>
              <Button className='btn btn-success btn-lg mt-2 rounded-0' >IMPRIMIR</Button>
              <Button
              onClick={() => navigate('/')}
              className='btn btn-success btn-lg mt-2 rounded-0' 
              id='btn'>
              VOLVER
              </Button>
            </div>
        </Card.Body>
        
  </Card>
      
    </div>
    </div>
  );
}

export default Codigo;
