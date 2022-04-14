import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/home.css';
import { Button, Card } from 'react-bootstrap';
function Home() {
  return (
    <div className='home'>
      <div className='inicio'>
        <Card className="text-center">
        <Card.Header >Bienvenido</Card.Header>
        <Card.Body>
          <Card.Title className='display-4'>IDENTIFICACIÓN</Card.Title>
          <Card.Text className='h4'>
            Identifíquese para conocer sus datos.
          </Card.Text>
          <div className='btn-group-vertical'>
            <Button href='paciente' variant="primary" className='btn btn-success btn-lg mt-2 rounded-0 '>Paciente</Button>
            <Button variant="medico" className='btn btn-success btn-lg mt-2 rounded-0'>Médico</Button>
          </div>
        </Card.Body>
      </Card> 
      </div>

    </div>
  );
}

export default Home;