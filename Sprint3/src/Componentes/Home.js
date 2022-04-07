import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/codigo.css';
import { Button } from 'react-bootstrap';
function Home() {
  return (
    <div className="Codigo">
    <Button    
    id='btn' 
    href='codigo'>
    
    VER TICKET
    
    </Button>

    <Button    
    className='btn btn-danger btn-lg'
    href='error'>
    
    NO HAY CITAS
    
    </Button>
      
    </div>
  );
}

export default Home;
