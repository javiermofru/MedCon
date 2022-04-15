import logo from './Assets/SaludMadrid.svg.png';
import './App.css';
import Codigo from './Componentes/Codigo';
import {Navbar, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer'
import Error from './Componentes/Error';
import CitasPaciente from './Componentes/CitasPaciente';
import Login from './Componentes/Login';
import Comprobacion from './Componentes/Comprobación'

function App() {
  return (
    <div className="App">
    
      <Navbar className='bg-gray-200 opacity-100'>
        <Container>
          <Navbar.Brand href="/">
          
        <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        
        <span >MedCon</span>  
        </Navbar.Brand>
      </Container>
    </Navbar>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="citasPaciente" element={<CitasPaciente/>} />
      <Route path="codigo" element={<Codigo/>} />
      <Route path="error" element={<Error/>} />
      <Route path="paciente" element={<Login/>} />
      <Route path='comprobar' element={<Comprobacion/>}/>

    </Routes>
  </BrowserRouter>

  <Footer/>

    </div>
  );
}

export default App;
