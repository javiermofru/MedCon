import React, { Component, useState, useEffect } from "react";
import { Button , Container, Table } from "react-bootstrap";

import "../../Assets/CitasMedico.css";
import { data } from "../../data/dataCitasMedico";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faCirclePlus, faBedPulse, faClockFour } from "@fortawesome/free-solid-svg-icons";


//let datos = JSON.parse(JSON.stringify(data));

export default function CitasMedico() {
  const [citas, setCitas] = useState([]);
  const [paciente, setPaciente] = useState([]);
  
  
  let {medico} = useParams();
  let {id} = useParams();
  console.log(medico)
  

  async function remove(id) {
    await fetch(`http://localhost:8080/medico/${medico}/${id}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'DELETE',
            'Content-Type': 'application/json'
        }
    }).then(() => {
        let updatedCitas = [...citas].filter(i => i.id !== id);
        setCitas(updatedCitas);
    });
  }

  async function llamar(id) {
    await fetch(`http://localhost:8080/medico/${medico}/llamar/${id}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: "Hola",
    }).then(function (status) {
      fetch(`http://localhost:8080/medico/${medico}`)
      .then((response) => response.json())
      .then((response) => setCitas(response));
    })
  }

  useEffect(() => {
    fetch(`http://localhost:8080/medico/${medico}`)
      .then((response) => response.json())
      .then((response) => setCitas(response));
    console.log(citas);
    
    fetch(`http://localhost:8080/medico/${medico}/llamar/${id}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
  
    
  }, []);
  console.log(`http://localhost:8080/medico/${medico}`)
  console.log(`http://localhost:8080/medico/${medico}/llamar/${id}`)
  console.log(citas);

 
  

  return (
    <div id="contenedor">
      <div>
      <div class="btn-group btn-group-lg" role="group" aria-label="...">
      </div>
      </div>
      <div className="container mt-3 ">
        <div>
          <h1>Tabla de citas del médico</h1>
          <div id="botones" className="btn-group btn-group-lg">
            <Link className="btn btn-success m-2 rounded-0" to="crear" id="añadir">
              Nueva cita &nbsp;
              <FontAwesomeIcon icon={faCirclePlus}/>

            </Link>
            
            <Link className="btn btn-success m-2 rounded-0" to="pacientes" id="añadir">
              Lista pacientes &nbsp;
              <FontAwesomeIcon icon={faBedPulse} />
            </Link>

          </div>
        </div>
        <table id="citas" className="mt-2">
          <tr>
            <th>Nombre</th>
            <th>
            <FontAwesomeIcon icon={faClockFour} />
            </th>
            <th>Fecha</th>
            <th></th>
            <th></th>
          </tr>

          {citas.map((data, index) => (
            <tr>
              <td>{data.nombrePaciente}</td> 
              <td>{data.hora}</td>
              <td>{data.fecha}</td>
              <td>
               <Button className="bnt btn-success" onClick={() => llamar(data.id)}>
               
               {!data.llamado ? "Llamar paciente" : "Llamado"}

               </Button>
              
              </td>
              <td>
              <Button size="sm" color="danger" onClick={() => remove(data.id)}>X</Button>
                {/* <Link className="btn btn-success" to={data.id} id="eliminar" /*onClick={/*() => remove(`${data.id}`)} >
                  X
                </Link> */}
              </td>
            </tr>
          ))}
        </table>

        <Link className="btn btn-success m-2 rounded-0" to="../medico" id="salir">
          Cerrar sesión &nbsp; 

          <FontAwesomeIcon icon={faSignOut}/>
        </Link>




      </div>
    </div>
  );
}
