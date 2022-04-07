import logo from './logo.svg';
import './App.css';
import LoginControl from './Components/LoginControl';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Bienvenida from './Components/Bienvenida';



function App() {
  return (
    <div className="App">  
      <header className="App-header">
        
        <Router>
          <Routes>
            <Route path='/' element={<LoginControl/>}/>
            <Route path='/bienvenida' element={<Bienvenida/>}/>
          </Routes>
        </Router>   
      </header>
    </div>
  );
}

export default App;
