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
        <h1>BIENVENIDO</h1>
      </div>
      <div className="container mt-3 ">
        <div>
          <h1>Tabla de citas del médico</h1>
          <Link className="btn btn-success" to="crear" id="añadir">
            Añadir cita
          </Link>
          <Link className="btn btn-success" to="listapacientes" id="añadir">
            Lista pacientes
          </Link>
          <Link className="btn btn-success" to="" id="añadir">
            Lista citas
          </Link>
        </div>
        <table id="citas">
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
                <Link className="btn btn-success" to="codigo" id="eliminar">
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
