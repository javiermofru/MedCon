import logo from './logo.svg';
import './App.css';
import SideMenu from './Components/Sidemenu';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Inicio from './Components/Router/Inicio';
//import Agenda from './Components/Router/Agenda'
import Citas from './Components/Router/Citas'
import Pacientes from './Components/Router/Pacientes'
import Recetas from './Components/Router/Recetas'
import Ajustes from './Components/Router/Ajustes'
import DemoApp from './Components/Router/Agenda';
import { useState } from 'react';

function App() {

  const [inactive, setInactive] = useState(false);
  return (
    
  <div className='App'>
    <Router>

      <SideMenu onCollapse={(inactive) => {
        console.log(inactive);
        setInactive(inactive);
      }} />
      <div className={`container ${inactive ? 'inactive' : ""}`}>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/agenda' element={<DemoApp/>}/>
          <Route path='/citas' element={<Citas/>}/>
          <Route path='/pacientes' element={<Pacientes/>}/>
          <Route path='/recetas' element={<Recetas/>}/>
          <Route path='/ajustes' element={<Ajustes/>}/>
      
        </Routes>


      </div>
    </Router>
    
    
    
    
  </div>
  );
}

export default App;
