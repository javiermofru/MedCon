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
import Login from './Componentes/Kiosko/Login';
import Comprobacion from './Componentes/Comprobación'

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
      <Route path="codigo" element={<Codigo/>} />
      <Route path="paciente" element={<Login/>} />
      <Route path='citas' element={<Comprobacion/>}/>

    </Routes>
  </BrowserRouter>

  <Footer/>

    </div>
  );
}

export default App;
