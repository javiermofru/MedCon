import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/home.css';
import { Link } from 'react-router-dom';

import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faHospitalUser, faDisplay } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <div className='home'>
      <div className='inicio'>
        <Card className="text-center">
        <Card.Header >Bienvenido</Card.Header>
        <Card.Body>
          <Card.Title className='display-4'>Seleccione el tipo de APP</Card.Title>
     {/*      <Card.Text className='h4'>
            Identifíquese para conocer sus datos.
          </Card.Text> */}
          <div className='btn-group'>
            <Button href="paciente" variant="primary" className='btn btn-success btn-lg m-2 rounded-0 '><FontAwesomeIcon icon={faHospitalUser}  size="6x"/></Button>
            <Button href="medico" className='btn btn-success btn-lg m-2 rounded-0'><FontAwesomeIcon icon={faUserMd} size="6x"/></Button>
            <Button href="salaespera" className='btn btn-success btn-lg m-2 rounded-0'><FontAwesomeIcon icon={faDisplay} size="6x"/></Button>

            </div>
        </Card.Body>
      </Card> 
      </div>

    </div>
  );
}

export default Home;