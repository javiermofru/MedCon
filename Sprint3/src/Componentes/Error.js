import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Codigo() {
  return (
    <div className="Codigo">
        <Card id='caja' className="border-top-0 ">
        
        
        <Card.Body className='card card-block w-40 mx-auto border-danger '>
            <FontAwesomeIcon icon={faCircleXmark} size='2xl' color='red' />
            <Card.Title id='welcome'>
            EL PACIENTE CON DNI: 'DNI'
            </Card.Title>
            <Card.Text className='text-danger h1' >
            NO TIENE CITAS PARA HOY            
            </Card.Text>
           
            <Button className='btn btn-danger btn-lg' >VOLVER</Button>

        </Card.Body>
        
  </Card>
      
    </div>
  );
}

export default Codigo;
