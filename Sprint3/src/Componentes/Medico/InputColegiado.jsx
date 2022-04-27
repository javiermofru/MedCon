import React, {useState} from "react";
import "../../Assets/Paciente/Login.css";
import {Link} from 'react-router-dom'

function Inputdni(){
  const [numCol, setNumCol] = useState('');
  console.log({numCol})
  
  return [
    <div>
      
        
      <form>
        <div className="btn-group-vertical">
          <input
          className="form-control"
          placeholder="Introduzca su número de colegiado'"
          pattern="[0-9]{9}"
          title="Debe poner 8 números y una letra"
          value={numCol}   
          name="" 
          onChange={e => setNumCol(e.target.value.toUpperCase())} 
          type="text" 
          />

          <input
          className="form-control mt-2"
          placeholder="Introduzca su contraseña"
          type="password" 
          />
        
          <button className="mt-2 btn btn-success" >
           <a 
           className="text-light"
           style={{textDecoration: 'none'}}
           href={"medico/" + numCol}>
           Mostrar citas
           </a>
           

          </button>
        </div>
      </form>       
      
    </div>
    
    
    
];
}

export default Inputdni;
