import React, { Component, useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import "../../Assets/CitasMedico.css";
import { data } from "../../data/dataCitasMedico";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faVenus,faMars  } from "@fortawesome/free-solid-svg-icons";

//let datos = JSON.parse(JSON.stringify(data));

export default function CitasMedico() {
    const [paciente, setPaciente] = useState([]);
    let {dni} = useParams();
    let {colegiado} = useParams();
    let navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/medico/${colegiado}/pacientes/${dni}`,)
      .then((response) => response.json())
      .then((response) => setPaciente(response));
    console.log(paciente);
  }, [500]);
  console.log(`http://localhost:8080/medico/${colegiado}/pacientes/${dni}`)
  console.log(paciente);
  return (
    <div>
     {paciente.map((data) => (
      <div class="container mt-5">
    
      <div class="row d-flex justify-content-center">
          
          <div class="col-md-15">
              
              <div class="col-md-15 card p-3 py-4">
              
                  
                  <div class="text-center">
                      <FontAwesomeIcon icon={faCircleUser} width="100" class="rounded-circle"/>
                  </div>
                  
                  <div class="text-center mt-3">
                      <span class="bg-white p-1 px-4 rounded border border-success border-3 text-success">
                      Paciente
                      </span>
                      
                      <h5 class="text-lg mt-4 mb-2 mb-0">
                      {data.nombre}
                      </h5>
                      <span id="fecha">
                      Fecha nacimiento: {data.fechaNacimiento}
                      </span>
                      
                      
                       <ul id="lista" class="social-list list-inline">
                          <li className="text-md">
                            Sexo: {data.sexo} {data.sexo=="Hombre" ? <FontAwesomeIcon icon={faMars} width="20" class="rounded-circle"/>:<FontAwesomeIcon icon={faVenus} width="20" class="rounded-circle"/>} 
                          </li>
                          <li>
                            DNI/NIF : {data.dni}
                          </li>
                          <li>
                            Patologías: {data.patologias}
                          </li>
                          <li><i class="fa fa-linkedin"></i></li>
                          <li><i class="fa fa-google"></i></li>
                      </ul>
                      
                      <div class="buttons">
                          
                          <button 
                          class="btn btn-success px-4"
                          onClick={() => navigate(`/medico/${colegiado}/pacientes`)}>                          
                          Volver
                          </button>
                      </div>
                      
                      
                  </div>
                  
                 
                  
                  
              </div>
              
          </div>
          
      </div>
      
  </div>
  
     ))}
    </div>
/*     <div id="contenedor">
    <button 
    className='btn btn-lg bg-success rounded-0 text-white mt-3 mb-2 '
    onClick={() => navigate(`/medico/${colegiado}/pacientes`)}>
      Volver
    </button>

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
 */  );
}
