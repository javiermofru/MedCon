import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
 import { data } from "../../data/dataCitasMedico";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactDOM } from "react";
import "./../../Assets/hora.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Crear() {
  let {colegiado} = useParams();

  const [crearid, setCrearid] = useState("");
  const [crearfecha, setCrearfecha] = useState("");
  const [hora, setHora] = useState("");
  const [llamado, setLlamado] = useState(false);
  const [registrado, setRegistrado] = useState(false);
  const [medico, setMedico] = useState(`${colegiado}`);
  const [dni, setDni] = useState("");
  const [ticketTurno, setTicketTurno] = useState("");
  const [razon, setRazon] = useState("");
  const [sala_consulta, setSala_consulta] = useState("");
  const [nombrePaciente, setNombrePaciente] = useState("");


  
  let navigate = useNavigate();


  
  async function handleSubmit(event) {
    await fetch(`http://localhost:8080/${colegiado}/crear/`, {
          method:'PUT', 
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            citaId: id,
            citaFecha: fecha,
            citaHora: hora,
            citaLlamado: llamado, 
            citaRegistrado: registrado,
            citaMedico: medico,
            citaDni: dni,
            citaTicketTurno: ticketTurno,
            citaRazon: razon,
            citaSala: sala_consulta,
            citaNombrePaciente: nombrePaciente
          })
    });  
        
  }

  console.log(id)
  console.log(nombrePaciente)

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

      <div id="form" className="form-group">

          <p>Id de la cita</p>
          <input type="text" name="id" class="field"  value={id} onChange={e => setId(e.target.value)} />
          
          <p>Nombre paciente</p>
          <input type="text" name="nombrePaciente" class="field"  value={nombrePaciente} onChange={e => setNombrePaciente(e.target.value)} />

          <p>DNI</p>
          <input type="text" name="dni" class="form-control" value={dni} onChange={e => setDni(e.target.value)}/>

          <p>Especialidad</p>
          <input type="text" name="razon" class="field" value={razon} onChange={e => setRazon(e.target.value)}/>

          <p>Hora</p>
          <input type="time" name="hora" class="field" value={hora} onChange={e => setHora(e.target.value)}/>

          <p>Fecha </p>
          <input type="date" name="fecha" class="field" value={fecha} onChange={e => setFecha(e.target.value)}/>

          
        
      </div>
    </div>
  );
}