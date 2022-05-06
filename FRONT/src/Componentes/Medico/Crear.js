import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
import { data } from "../../data/dataCitasMedico";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Crear() {
  
  let {colegiado} = useParams();
  let navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Tabla de citas del médico</h1>
        <Link className="btn btn-success" to="../medico/pacientes" id="añadir">
          Lista pacientes
        </Link>
        <button 
        className='btn bg-success text-white'
        onClick={() => navigate(`/medico/${colegiado}`)}>
          Citas
        </button>
</div>
      <div id="formulario">
        <h1>Añadir nueva cita</h1>
        <form action="../form-result.php" target="_blank">
          <p>Nombre paciente</p>
          <input type="text" name="nombre" class="field" />

          <p>DNI</p>
          <input type="text" name="dni" class="field" />

          <p>Especialidad</p>
          <input type="text" name="dni" class="field" />

          <p>Hora</p>
          <input type="time" name="hora" class="field" />

          <p>Fecha </p>
          <input type="date" name="fecha" class="field" />

          <p>
            <input type="submit" id="hora1" value="Añadir Cita" class="field" />
          </p>
        </form>
      </div>
    </div>
  );
}
