import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
 import { data } from "../../data/dataCitasMedico";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactDOM } from "react";
import "./../../Assets/hora.css"
import "./../../Assets/crear.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Crear() {
  let {colegiado} = useParams();

  const [nid, setNid] = useState("");
  const [nfecha, setNfecha] = useState("");
  const [nhora, setNhora] = useState("");
  const [nllamado, setNLlamado] = useState(false);
  const [nregistrado, setNregistrado] = useState(false);
  const [nmedico, setNmedico] = useState(`${colegiado}`);
  const [ndni, setNdni] = useState("");
  const [nticketTurno, setNticketTurno] = useState("null");
  const [nrazon, setNrazon] = useState("");
  const [nsala_consulta, setNsala_consulta] = useState("2");
  const [nnombrePaciente, setNnombrePaciente] = useState("");


  
  let navigate = useNavigate();


  
  async function handleSubmit(event) {
    await fetch(`http://localhost:8080/${colegiado}/crear/`, {
          method:'POST', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: nid,
            fecha: nfecha,
            hora: nhora,
            llamado: nllamado, 
            registrado: nregistrado,
            medico: nmedico,
            dni: ndni,
            ticketTurno: nticketTurno,
            razon: nrazon,
            sala_consulta: nsala_consulta,
            nombrePaciente: nnombrePaciente
          })
    },[]);  
        
  }

  console.log(nid)
  console.log(nnombrePaciente)

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
          <input type="text" name="id" className="field"  value={nid} onChange={e => setNid(e.target.value)} />
          
          <p>Nombre paciente</p>
          <input type="text" name="nombrePaciente" className="field"  value={nnombrePaciente} onChange={e => setNnombrePaciente(e.target.value)} />

          <p>DNI</p>
          <input type="text" name="dni" className="form-control" value={ndni} onChange={e => setNdni(e.target.value)}/>

          <p>Especialidad</p>
          <input type="text" name="razon" className="field" value={nrazon} onChange={e => setNrazon(e.target.value)}/>

          <p>Hora</p>
          <input type="time" name="hora" className="field" value={nhora} onChange={e => setNhora(e.target.value)}/>

          <p>Fecha </p>
          <input type="date" name="fecha" className="field" value={nfecha} onChange={e => setNfecha(e.target.value)}/>

          <button className="btn btn-success mt-2" onClick={() => handleSubmit()} >                    
            Ver mis citas
          </button>
        
      </div>
    </div>
  );
}