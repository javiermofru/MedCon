import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/error.css'
import { Card, Button } from 'react-bootstrap';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link,  } from 'react-router-dom';


function Error() {
  var dni = '79120176S'
  return (
    <div className="Error">
      <div className='ErrorInicio'>
      <Card className="text-center">
      <Card.Header>NO TIENE CITAS </Card.Header>
      <Card.Body>
          <Card.Text className='h3' >
            El paciente con el DNI: {dni}
          </Card.Text>
          <Card.Text className='display-4'>
            NO TIENE CITAS PARA HOY
          </Card.Text>
          <a href='paciente' className='btn btn-danger'>
            VOLVER
          </a>
          






      
      </Card.Body>
  </Card> 
</div>
      {/*
      
      
      
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

  */}
      
    </div>
  );
}

export default Error;
