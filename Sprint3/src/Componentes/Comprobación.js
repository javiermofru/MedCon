import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CitasPaciente from './CitasPaciente';
import Error from './Error';
function Comprobacion() {
    const tieneCitas = true;

    
  return (
    <div>
       {tieneCitas ? <CitasPaciente/> : <Error/>} 
    </div>
  );
}

export default Comprobacion;