import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
import { data } from "../../data/dataCitasMedico";
import { Link, useNavigate, useParams } from "react-router-dom";

//let datos = JSON.parse(JSON.stringify(data));

export default function CitasMedico() {
  const [paciente, setPaciente] = useState([]);
  let {colegiado} = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/medico/pacientes`)
      .then((response) => response.json())
      .then((response) => setPaciente(response));
    console.log(paciente);
  }, [500]);
  console.log(`http://localhost:8080/medico/pacientes`)
  console.log(paciente);
  return (
    <div id="contenedor">
      <div className="container mt-3 ">
        <div>
          <h1>Lista de Pacientes</h1>
          
        </div>
        <button 
        className='btn btn-lg bg-success rounded-0 text-white mt-3 mb-2 '
        onClick={() => navigate(`/medico/${colegiado}`)}>
          Volver
        </button>
  
        <table id="citas">
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th></th>
          </tr>

          {paciente.map((data, index) => (
            <tr>
              <td>{data.nombre}</td> 
              <td>{data.dni}</td>
              <td>
                <Link className="btn btn-success" to={data.dni}>
                  Info
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
