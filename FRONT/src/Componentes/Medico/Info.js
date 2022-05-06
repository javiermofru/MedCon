import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
import { data } from "../../data/dataCitasMedico";
import { Link, useParams } from "react-router-dom";

//let datos = JSON.parse(JSON.stringify(data));

export default function CitasMedico() {
    const [paciente, setPaciente] = useState([]);
    let {dni} = useParams();
    let {colegiado} = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/medico/${colegiado}/pacientes/${dni}`,)
      .then((response) => response.json())
      .then((response) => setPaciente(response));
    console.log(paciente);
  }, [500]);
  console.log(`http://localhost:8080/medico/${colegiado}/pacientes/${dni}`)
  console.log(paciente);
  return (
    <div id="contenedor">
      <div className="container mt-3 ">
      {paciente.map((data, index) => (
        <div>
            <h2>Nombre y Apellidos: {data.nombre}</h2>
            <h3>Fecha de Nacimiento: {data.fechaNacimiento}</h3>
            <h3>Sexo: {data.sexo}</h3>
            <h3>DNI: {data.dni}</h3>
            <h3>Patologías :</h3>
        </div>
       ))}
      </div>
    </div>
  );
}
