import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/SalaEspera.css";
import { Link, useParams } from "react-router-dom";

export default function SalaEspera() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/salaespera`)
        .then(response => response.json())
        .then(response=> setCitas(response))
    }, [500]);
    console.log(`http://localhost:8080/salaespera`)
    console.log(citas);

  return (
    <div>
        <div>
          <h1>Tabla de citas del médico</h1>
        </div>
        <table id="citas">
          <thead>
            <tr>
              <th>TURNO</th>
              <th>SALA CONSULTA</th>
            </tr>
          </thead>
          <tbody>
          {citas.map((data, index) => (
            <tr>
              <td>{data.ticketTurno}</td>
              <td>{data.sala_consulta}</td>
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  );

}
