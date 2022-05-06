import logo from './Assets/SaludMadrid.svg.png';
import './App.css';
import Codigo from './Componentes/Kiosko/Codigo';
import {Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer'
import PacienteLogin from './Componentes/Kiosko/LoginPaciente';
//import CitasPaciente from './Componentes/Kiosko/CitasPaciente';
import CitasPaciente from './Componentes/Kiosko/CitasPacientes2';
import LoginMedico from './Componentes/Medico/LoginMedico';
import CitasMedico from './Componentes/Medico/CitasMedico';

function App() {
  return (
    <div className="App">
    
      <Navbar className='bg-secondary opacity-100'>
        <Container>
          <Navbar.Brand href="/">
          
        <img
            alt=""
            src={logo}
            width="50"
            height="auto"
            className="d-inline-block align-top"
          />
        
        <span className='text-white' >MedCon</span>  
        </Navbar.Brand>
      </Container>
    </Navbar>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="paciente" element={<PacienteLogin/>} />
      <Route path="paciente/:dni" element={<CitasPaciente/>} />
      <Route path="paciente/codigo/:citaId" element={<Codigo/>} />
      <Route path='medico' element={<LoginMedico/>}/>
      <Route path="medico/:colegiado" element={<CitasMedico/>} />


    </Routes>
  </BrowserRouter>

  <Footer/>

    </div>
  );
}

export default App;