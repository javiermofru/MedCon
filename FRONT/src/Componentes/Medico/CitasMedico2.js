import React, { Component, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
//import { Button, ButtonGroup, Container, Table } from 'reactstrap';
//import AppNavbar from './AppNavbar';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import '../../Assets/CitasPaciente.css';
import InputColegiado from './inputColegiado.jsx';



export default function CitasMedico2(){
  const [citas, setCitas] = useState([]);

  let {dni} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
  fetch(`http://localhost:8080/medico/${dni}`)
      .then(response => response.json())
      .then(response=> setCitas(response))
  }, [500]);
  console.log(`http://localhost:8080/medico/${dni}`)
  console.log(citas);


  return (
      <div >
          <div className='container mt-3 '>
              <h1>Tabla de citas del médico</h1>
              <table id='citas'>
                  <tr>
                      <th>Nombre</th>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Llamar</th>
                  </tr>

                  {citas.map((data,index) => (
                  
                  <tr>
                      <td>{data.nombre}</td>
                      <td>{data.fecha}</td>
                      <td>{data.hora}</td>
                      <td>
                          <button 
                              className='btn m-2 bg-success'
                              onClick={() => navigate(`/paciente/codigo/${citas[index].id}`)}                      
                              
                          >
                              <FontAwesomeIcon className='btn btn-success' icon={faCheck}/>

                          </button>
                      
                      </td>
                  </tr>  
                  ))}

              </table>
          </div>
      </div>
  )
  

}