import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
import { data } from "../../data/dataCitasMedico";
import { Link, useParams } from "react-router-dom";

//let datos = JSON.parse(JSON.stringify(data));

export default function CitasMedico() {
  const [citas, setCitas] = useState([]);
  const [paciente, setPaciente] = useState([]);
  let {medico} = useParams();
  console.log(medico)

  async function remove(id) {
    await fetch(`http://localhost:8080/medico/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(() => {
        let updatedCitas = [...this.citas].filter(i => i.id !== id);
        this.setCitas(updatedCitas);
    });
  }
  useEffect(() => {
    fetch(`http://localhost:8080/medico/${medico}`)
      .then((response) => response.json())
      .then((response) => setCitas(response));
    console.log(citas);
  }, [500]);
  console.log(`http://localhost:8080/medico/${medico}`)
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
              Añadir cita
            </Link>
            
            <Link className="btn btn-success m-2 rounded-0" to="pacientes" id="añadir">
              Lista pacientes
            </Link>

          </div>
        </div>
        <table id="citas" className="mt-2">
          <tr>
            <th>Nombre</th>
            <th>Hora</th>
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
                <Link className="btn btn-success" to="codigo">
                  Llamar
                </Link>
              </td>
              <td>
                <Link className="btn btn-success" to="codigo" id="eliminar" onClick={() => this.remove(data.id)}>
                  X
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
