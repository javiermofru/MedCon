import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
 import { data } from "../../data/dataCitasMedico";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ReactDOM } from "react";
import "./../../Assets/hora.css"
import "./../../Assets/crear.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

import {faCircleLeft, faUser, faHashtag, faIdCard, faFilePen, faClock, faCalendar } from '@fortawesome/free-solid-svg-icons'


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
    let Cita = {id: nid, fecha:  nfecha, hora: nhora, llamado: nllamado, registrado: nregistrado, medico: nmedico, dni: ndni, ticketTurno: nticketTurno, razon: nrazon, sala_consulta: nsala_consulta, nombrePaciente: nnombrePaciente};
    console.log('+++++'+Cita)
    await axios.post("http://localhost:8080/medico/crear", Cita);
    /* await fetch(`http://localhost:8080/medico/${colegiado}/crear`, {
          method:'POST', 
          mode: 'no-cors',
          body:{
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
          },
          headers: {
          // 'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          
    },[]);   */
        
  }

  console.log(nid)
  console.log(nnombrePaciente)

  return (
    
    <div className="contenedor">
    
      <div >
      
        <h1>Añadir nueva cita</h1>
      </div>     
      <FontAwesomeIcon className='btn-success bg-success rounded-circle text-white mt-3 mb-2 border border-3 border-success ' icon={faCircleLeft} size="2x" onClick={() => navigate(`/medico/${colegiado}`)} />

      <form>
        <div className="form-row align-items-center">
          
        <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInputGroup">TicketID</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                <FontAwesomeIcon icon={faHashtag} size="2x"/>

                </div>
              </div>
              <input type="text" className="ml-1 form-control" id="inlineFormInputGroup" placeholder="Id de la cita" value={nid} onChange={e => setNid(e.target.value)}/>
            </div>
          </div>
          
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInputGroup">Paciente</label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">      
                  <FontAwesomeIcon icon={faUser} size="2x"/>
                </div>
              </div>
              <input type="text" className="ml-1 form-control" id="inlineFormInputGroup" placeholder="Nombre paciente" value={nnombrePaciente} onChange={e => setNnombrePaciente(e.target.value)}/>
            </div>
        </div>

        <div className="col-auto">
          <label className="sr-only" htmlFor="inlineFormInputGroup">DNI</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">      
                <FontAwesomeIcon icon={faIdCard} size="2x"/>
              </div>
            </div>
            <input type="text" className="ml-1 form-control" id="inlineFormInputGroup" placeholder="Número de DNI/NIF" value={ndni} onChange={e => setNdni(e.target.value)}/>
          </div>
        </div>

        <div className="col-auto">
          <label className="sr-only" htmlFor="inlineFormInputGroup">RAZÓN</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">      
                <FontAwesomeIcon icon={faFilePen} size="2x"/>
              </div>
            </div>
            <input type="text" className="ml-1 form-control" id="inlineFormInputGroup" placeholder="Razón de consulta" value={nrazon} onChange={e => setNrazon(e.target.value)}/>
          </div>
        </div>

        <div className="col-auto">
          <label className="sr-only" htmlFor="inlineFormInputGroup">HORA</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">      
                <FontAwesomeIcon icon={faClock} size="2x"/>
              </div>
            </div>
            <input type="time" className="ml-1 form-control" id="inlineFormInputGroup" placeholder="Hora" value={nhora} onChange={e => setNhora(e.target.value)}/>
          </div>
        </div>

        <div className="col-auto">
          <label className="sr-only" htmlFor="inlineFormInputGroup">FECHA</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <div className="input-group-text">      
                <FontAwesomeIcon icon={faCalendar} size="2x"/>
              </div>
            </div>
            <input type="date" className="ml-1 form-control" id="inlineFormInputGroup" placeholder="Fecha" value={nfecha} onChange={e => setNfecha(e.target.value)}/>
          </div>
        </div>
          
      </div>
      <div className="col-auto">
        <button onClick={() => handleSubmit()} className="btn btn-success mb-2">Añadir cita</button>
      </div>
    </form>  
  
  
    </div>
  );
}