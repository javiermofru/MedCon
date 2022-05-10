import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
/* import { data } from "../../data/dataCitasMedico";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactDOM } from "react";
import "./../../Assets/hora.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Crear extends Componet {
  
  const [buttonText, setButtonText] = useState("Llamar Paciente");
  const [newCita, setNewCita] = useState("");
  let emptyCita = {
    id: '',
    fecha:'',
    hora:'',
    llamado:'false',
    registrado: 'false',
    medico:'',
    dni: '',
    ticketTurno: 'null',
    razon: '',
    sala_consulta: '',
    nombrePaciente: ''
  }
  const {item} = newCita;
  
  let {colegiado} = useParams();
  let navigate = useNavigate();

  
  async function handleSubmit(event) {
    //event.preventDefault();
    await fetch(`http://localhost:8080/${colegiado}/crear/`, {
          method:'POST', 
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify()
    });  
        
  }
  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    setNewCita({item});
}

  return (
    
    <div>
    
      <div >
      
        <h1>Añadir nueva cita</h1>
      </div>
      <button 
      className='btn btn-lg bg-success rounded-0 text-white mt-3 mb-2 '
      onClick={() => navigate(`/medico/${colegiado}`)}>
        Volver
      </button>

      <div id="formulario" className="form-group">
        <form className=" mt-2 " target="_blank" onSubmit={handleSubmit()}>
          <p>Nombre paciente</p>
          <input type="text" name="nombrePaciente" class="field"  value={item.nombrePaciente || ''} onChange={handleChange()} />

          <p>DNI</p>
          <input type="text" name="dni" class="form-control" value={item.dni || ''} onChange={handleChange()}/>

          <p>Especialidad</p>
          <input type="text" name="razon" class="field" value={item.razon || ''} onChange={handleChange()}/>

          <p>Hora</p>
          <input type="time" name="hora" class="field" value={item.hora || ''} onChange={handleChange()}/>

          <p>Fecha </p>
          <input type="date" name="fecha" class="field" value={item.fecha || ''} onChange={handleChange()}/>

          <p>
            <input className="btn btn-success" type="submit" id="hora1" value="Añadir cita" class="field" />
          </p>
        </form>
      </div>
    </div>
  );
}
 */